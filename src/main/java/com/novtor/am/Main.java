package com.novtor.am;

import org.activiti.engine.IdentityService;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.identity.Group;
import org.activiti.engine.identity.User;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

/**
 * Date: 06/12/2015
 * Time: 22:03
 */
@SpringBootApplication
public class Main {

  public static void main(String[] args) {
    SpringApplication.run(Main.class, args);
  }
//
//  @Bean
//  public WebMvcConfigurer corsConfigurer() {
//    return new WebMvcConfigurerAdapter() {
//      @Override
//      public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/").allowedOrigins("*");
//      }
//    };
//  }

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

  @Bean
  public CommandLineRunner init( final RepositoryService repositoryService,
                          final RuntimeService runtimeService,
                          final TaskService taskService) {

    return new CommandLineRunner() {

      public void run(String... strings) throws Exception {
        Map<String, Object> variables = new HashMap<String, Object>();
        variables.put("applicantName", "John Doe");
        variables.put("email", "john.doe@activiti.com");
        variables.put("phoneNumber", "123456789");
        runtimeService.startProcessInstanceByKey("hireProcess", variables);
      }
    };
  }
}
