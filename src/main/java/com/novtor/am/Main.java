package com.novtor.am;

import org.activiti.engine.IdentityService;
import org.activiti.engine.identity.Group;
import org.activiti.engine.identity.User;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import javax.annotation.PostConstruct;

/**
 * Date: 06/12/2015
 * Time: 22:03
 */
@SpringBootApplication
public class Main {

  public static void main(String[] args) {
    SpringApplication.run(Main.class, args);
  }

  @Bean
  public InitializingBean usersAndGroupsInitializer(final IdentityService identityService) {

    return new InitializingBean() {
      public void afterPropertiesSet() throws Exception {

        Group group = identityService.newGroup("user");
        group.setName("users");
        group.setType("security-role");
        identityService.saveGroup(group);

        User admin = identityService.newUser("admin");
        admin.setPassword("admin");
        identityService.saveUser(admin);
      }
    };
  }
}
