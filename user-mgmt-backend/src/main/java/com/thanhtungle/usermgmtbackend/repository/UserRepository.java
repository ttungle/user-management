package com.thanhtungle.usermgmtbackend.repository;

import com.thanhtungle.usermgmtbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
