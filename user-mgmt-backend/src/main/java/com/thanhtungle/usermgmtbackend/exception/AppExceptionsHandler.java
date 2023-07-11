package com.thanhtungle.usermgmtbackend.exception;

import com.thanhtungle.usermgmtbackend.model.response.BaseErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AppExceptionsHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<BaseErrorResponse> handleNotFoundException(NotFoundException exc) {
        BaseErrorResponse error = new BaseErrorResponse();
        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exc.getMessage());

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<BaseErrorResponse> handleException(Exception exc) {
        BaseErrorResponse error = new BaseErrorResponse();
        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage(exc.getMessage());

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}
