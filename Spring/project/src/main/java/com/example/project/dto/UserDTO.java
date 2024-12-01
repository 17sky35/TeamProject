package com.example.project.dto;

import com.example.project.model.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

	private Long id;
	private String token;
	private String userName;
	private String nickName;
	private String password;
	private String authPassword;
	
//	public UserDTO(final UserEntity entity) {
//		this.id = entity.getId();
//		this.userName = entity.getUserName();
//		this.nickName = entity.getNickName();
//		this.password = entity.getPassword();
//		this.authPassword = entity.getAuthPassword();
//	}
	
	
}
