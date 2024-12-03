package com.korea.travel.service;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.korea.travel.dto.UserDTO;
import com.korea.travel.model.UserEntity;
import com.korea.travel.persistence.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {
	
	private final UserRepository repository;
	
	private final PasswordEncoder passwordEncoder;
	
	//회원가입
	public UserDTO signup(UserDTO dto) {
		UserEntity user = UserEntity.builder()
				.userId(dto.getUserId())
				.userName(dto.getUserName())
				.userNickName(dto.getUserNickName())
				.userPassword(passwordEncoder.encode(dto.getUserPassword()))
				.build();
		if(user == null || user.getUserId() == null) {
			throw new RuntimeException("Invalid Arguments 유효하지 않은 인자");
		}
		final String userId = user.getUserId();
		//존재하는 ID인지 검사
		if(repository.existsByUserId(userId)) {
			log.warn("userId이 이미 존재 합니다.1 {}", userId);
			throw new RuntimeException("이미 존재하는 ID 입니다.");
		}else {
			repository.save(user);
			return UserDTO.builder()
					.userId(user.getUserId())
					.userName(user.getUserName())
					.userNickName(user.getUserNickName())
					.userPassword(user.getUserPassword())
					.build();
		}
	}
		
	//주어진 userName과 userPassword로 UserEntity 조회하기
	public UserDTO getByCredentials(String userId,String userPassword) {
		UserEntity user = repository.findByUserId(userId);
		//DB에 저장된 암호화된 비밀번호와 사용자에게 입력받아 전달된 암호화된 비밀번호를 비교
		if(user != null && passwordEncoder.matches(userPassword,user.getUserPassword())) {
			return UserDTO.builder()
				.id(user.getId())
				.userId(user.getUserId())
				.userName(user.getUserName())
				.userNickName(user.getUserNickName())
				.userPassword(user.getUserPassword())
				.build();
		}else {
			return null;
		}
	}
}
