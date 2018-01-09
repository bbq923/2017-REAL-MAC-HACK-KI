package com.amigotrip.web;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by Woohyeon on 2018. 1. 9..
 */
@RestController
public class AuthController {
    @GetMapping("/user")
    public Principal user(Principal principal) {
        return principal;
    }
}
