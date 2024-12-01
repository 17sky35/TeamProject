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

	private Long id;			//고유 id
	private String userId;		//유저Id
	private String userName; 	//유저이름
	private String nickName;	//닉네임
	private String password;	//비밀번호
	
	
	
}
