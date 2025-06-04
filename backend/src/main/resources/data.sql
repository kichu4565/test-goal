-- Insert admin user (password: admin123)
INSERT INTO users (name, date_of_birth, email, mobile, address, password)
VALUES (
    'Admin User',
    '01-01-2000',
    'admin@gmail.com',
    '1234567890',
    'Admin Address',
    '$2a$10$rDkPvvAFV6GgJjXpYWxqUOQZx5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z'
); 