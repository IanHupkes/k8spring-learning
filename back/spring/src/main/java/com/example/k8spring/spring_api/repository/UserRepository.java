package com.example.k8spring.spring_api.repository;

import com.example.k8spring.spring_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
