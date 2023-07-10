package com.thanhtungle.usermgmtbackend.controller;

import com.thanhtungle.usermgmtbackend.model.User;
import com.thanhtungle.usermgmtbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User createUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }
}
