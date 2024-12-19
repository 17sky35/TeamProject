package com.korea.travel.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.korea.travel.service.LikeService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/likes")
@RequiredArgsConstructor
public class LikeController {

    private final LikeService likeService;

    // 좋아요 추가
    @PostMapping("/{postId}")
    public ResponseEntity<?> addLike(@PathVariable Long postId) {
        Long userId = getCurrentUserId();  // 현재 사용자 ID를 추출
        likeService.addLike(userId, postId);
        return ResponseEntity.ok().build();
    }

    // 좋아요 삭제
    @DeleteMapping("/{postId}")
    public ResponseEntity<?> removeLike(@PathVariable Long postId) {
        Long userId = getCurrentUserId();  // 현재 사용자 ID를 추출
        likeService.removeLike(userId, postId);
        return ResponseEntity.ok().build();
    }

    // 사용자가 해당 게시물에 좋아요를 눌렀는지 확인
    @GetMapping("/{postId}/isLiked")
    public ResponseEntity<Boolean> isLiked(@PathVariable Long postId) {
    	
    	System.out.println("postId:" + postId);
        Long userId = getCurrentUserId();
        boolean liked = likeService.isLiked(userId, postId);
        return ResponseEntity.ok(liked);
    }

    // 현재 로그인된 사용자의 ID를 가져오는 메소드
    private Long getCurrentUserId() {
        // SecurityContextHolder에서 userId를 추출
        UsernamePasswordAuthenticationToken authentication = 
            (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        return Long.parseLong((String) authentication.getPrincipal()); // userId를 직접 가져옴
    }
}