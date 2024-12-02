package com.example.project.service;

import org.springframework.stereotype.Service;

import com.example.project.model.UserEntity;
import com.example.project.persistence.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {
	
	private final UserRepository repository;
	
	public UserEntity create(UserEntity userEntity) {
		if(userEntity == null || userEntity.getUserId() == null) {
			throw new RuntimeException("Invalid Arguments 유효하지 않은 인자");
		}
		final String userId = userEntity.getUserId();
		//존재하는 ID인지 검사
		if(repository.existsByUserName(userId)) {
			log.warn("userId이 이미 존재 합니다.1 {}", userId);
			throw new RuntimeException("이미 존재하는 ID 입니다.");
		}
	
		return repository.save(userEntity);
	}
	
	
}
