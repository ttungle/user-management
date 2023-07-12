package com.thanhtungle.usermgmtbackend.controller;

import com.thanhtungle.usermgmtbackend.exception.NotFoundException;
import com.thanhtungle.usermgmtbackend.model.entity.User;
import com.thanhtungle.usermgmtbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users")
    public User createUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id) {

        return userRepository.findById(id).orElseThrow(() -> new NotFoundException("No user found with id " + id));
    }

    @PutMapping("/users/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());

            return userRepository.save(user);
        }).orElseThrow(() -> new NotFoundException("No user found with id " + id));
    }
}
