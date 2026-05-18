package com.capgemini.education.k8spring.spring_api.repository;

import com.capgemini.education.k8spring.spring_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}