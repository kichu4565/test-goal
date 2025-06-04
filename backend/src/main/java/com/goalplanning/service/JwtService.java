package com.goalplanning.service;

import com.goalplanning.entity.User;

public interface JwtService {
    String generateToken(User user);
    String extractUsername(String token);
    boolean isTokenValid(String token);
} 