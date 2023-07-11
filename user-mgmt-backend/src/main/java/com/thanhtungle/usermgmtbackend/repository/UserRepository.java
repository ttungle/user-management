package com.thanhtungle.usermgmtbackend.repository;

import com.thanhtungle.usermgmtbackend.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
