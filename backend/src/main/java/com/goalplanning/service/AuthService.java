package com.goalplanning.service;

import com.goalplanning.dto.LoginRequest;
import com.goalplanning.dto.LoginResponse;
import com.goalplanning.dto.RegisterRequest;
import com.goalplanning.dto.UserDTO;

public interface AuthService {
    UserDTO register(RegisterRequest request);
    LoginResponse login(LoginRequest request);
} 