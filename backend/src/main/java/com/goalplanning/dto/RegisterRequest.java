package com.goalplanning.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private String mobile;
    private String address;
    private LocalDate dateOfBirth;
} 