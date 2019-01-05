# jenkinsDemo

### Getting started
  1. [Install Java 8 (either a JRE or Java Development Kit (JDK) is fine)](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) -- I installed 8u192
  
  2. [Install Jenkins](http://mirrors.jenkins.io/war-stable/latest/jenkins.war)
  
  3. Open up a terminal in the download directory
  
  4. Switch to Java 8 as your default (this will have to be done each time you start up your computer because it defaults back to Java 11).
    
    a. In the download directory in terminal paste: "/usr/libexec/java_home -V"
    b. That will show the versions of java on your machine
    c. Can check the current default java version with: "java -version"
    d. Paste, export "JAVA_HOME=`/usr/libexec/java_home -v 1.8.0_192`"
    e. Ensure it changed with: "java -version"
 
  4. Run ```java -jar jenkins.war --httpPort=8080``` 
 
    a. If you see: "SEVERE: Container startup failedjava.io.IOException: Failed to start Jetty..."
    b. Then do: "java -jar jenkins.war --httpPort=8081"
    c. Any port that is free can be used 
  
  5. Navigate to ```http://localhost:8080``` or ``` http://localhost:8081``` or whichever port you decided to use
  
  6. Follow the instructions to complete installation  
  
  
  
  Resources:
  1. [Jenkins Getting Started](https://jenkins.io/doc/pipeline/tour/getting-started/)
  2. [Change default java version](https://stackoverflow.com/questions/21964709/how-to-set-or-change-the-default-java-jdk-version-on-os-x)
  3. [Container startup failed troubleshoot](https://stackoverflow.com/questions/45008564/container-start-up-failed-in-jenkins)
