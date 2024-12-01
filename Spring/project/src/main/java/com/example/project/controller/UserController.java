package com.example.project.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.dto.ResponseDTO;
import com.example.project.dto.UserDTO;
import com.example.project.model.UserEntity;
import com.example.project.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/travle")
public class UserController {

	private UserService service;
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO){
		//request body 에 포함된 UserDTO 객체에 수신하여 처리한다.
		try {
			//UserDTO를 기반으로 UserEntity 객체를 생성한다.
			UserEntity user = UserEntity.builder()
					.userName(userDTO.getUserName())
					//사용자에게 입력받은 비밀번호 암호화
					.password(userDTO.getPassword())
					.build();
			
			//UserService를 이용해 새로 만든 UserEntity를 데이터베이스에 저장한다.
			UserEntity registeredUser = service.create(user);
			
			
			//등록된 UserEntity 정보를 UserDTO로 변환하여 응답에 사용한다.
			UserDTO responseUserDTO = UserDTO.builder()
					.id(registeredUser.getId())
					.userName(registeredUser.getUserName())
					.build();
			// 성공적으로 저장된 유저 정보를 포함한 HTTP 200 응답을 반환한다.
            return ResponseEntity.ok(responseUserDTO);
		} catch (Exception e) {
			//예외가 발생한 경우, 에러 메시지를 포함한 ResponseDTO 객체를 만들어 응답한다.
			ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();
			
			//HTTP 400상태 코드를 반환하고, 에러메시지를 ResponseBody에 포함시킨다.
			return ResponseEntity.badRequest().body(responseDTO);// HTTP 400 응답을 생성한다.
		}
	}
}
