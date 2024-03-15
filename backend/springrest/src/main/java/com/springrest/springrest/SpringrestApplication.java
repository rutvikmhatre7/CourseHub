package com.springrest.springrest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import com.fasterxml.jackson.databind.SerializationFeature;

@SpringBootApplication
public class SpringrestApplication {

	@Bean
	public Jackson2ObjectMapperBuilder objectMapperBuilder() {
	    return new Jackson2ObjectMapperBuilder()
	        .featuresToDisable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
	}



	public static void main(String[] args) {
		SpringApplication.run(SpringrestApplication.class, args);
	}

}
