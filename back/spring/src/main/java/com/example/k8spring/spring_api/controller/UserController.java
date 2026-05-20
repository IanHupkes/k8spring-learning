package com.example.k8spring.spring_api.controller;

import com.example.k8spring.spring_api.model.User;
import com.example.k8spring.spring_api.service.UserService;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
}
