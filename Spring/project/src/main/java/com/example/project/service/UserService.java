package com.example.project.service;

import org.springframework.stereotype.Service;

import com.example.project.model.UserEntity;
import com.example.project.persistence.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserService {
	
	private UserRepository repository;
	
	public UserEntity create(UserEntity userEntity) {
		if(userEntity == null || userEntity.getUserName() == null) {
			throw new RuntimeException("Invalid Arguments 유효하지 않은 인자");
		}
		final String username = userEntity.getUserName();
		
		if(repository.existsByUsername(username)) {
			log.warn("username이 이미 존재 합니다.1 {}", username);
			throw new RuntimeException("이미 존재하는 ID 입니다.");
		}
	
		return repository.save(userEntity);
	}
	
	
}
