pipeline {
    agent any

    tools {
        // This should match the name of your SonarScanner in Jenkins tools
        sonarQubeScanner 'SonarScanner'
    }

    environment {
        // Set your SonarQube server name (must match Jenkins global config)
        SONARQUBE_ENV = 'SONAR_TOKEN'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/yashwagh30/EcoHarmonydocker.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${SONARQUBE_ENV}") {
                    sh 'sonar-scanner -Dsonar.projectKey=eco-harmony -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=sqa_2c3afc0b54d4b089a98d86dc3f600eb077636683'
                }
            }
        }
    }
}
