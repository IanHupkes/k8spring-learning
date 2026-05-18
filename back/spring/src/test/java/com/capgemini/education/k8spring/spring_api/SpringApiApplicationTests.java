package com.capgemini.education.k8spring.spring_api;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
class SpringApiApplicationTests {

	@Test
	void contextLoads() {
        Assert.notNull(null, "Not null!");
	}

}
