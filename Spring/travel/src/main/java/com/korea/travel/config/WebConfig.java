package com.korea.travel.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("http://localhost:3000")
				.allowedMethods("GET","POST","PUT","DELETE","PATCH")
				.allowedHeaders("Authorization", "Content-Type", "*")	//모든 헤더 허용
				.allowCredentials(true);//쿠키를 포함한 요청을 허용
	}
	
}