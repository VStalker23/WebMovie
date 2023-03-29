package com.myproject.webstoreproject.mapper;

import com.myproject.webstoreproject.model.User;
import com.myproject.webstoreproject.rest.dto.UserDto;

public interface UserMapper {

    UserDto toUserDto(User user);
}
