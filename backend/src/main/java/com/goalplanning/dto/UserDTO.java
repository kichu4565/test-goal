package com.goalplanning.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String mobile;
    private String address;
    private LocalDate dateOfBirth;
} 