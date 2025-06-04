package com.goalplanning.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class SignupRequest {
    private String name;
    private LocalDate dateOfBirth;
    private String email;
    private String mobile;
    private String address;
    private String password;
    private String confirmPassword;
} 