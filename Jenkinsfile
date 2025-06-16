pipeline {
    agent any

    environment {
        // These are passed to sonar-scanner via env if needed
        SONAR_HOST_URL = 'http://localhost:9000'     // Change this if needed
        SONAR_AUTH_TOKEN = credentials('SONAR_TOKEN') // Your Jenkins credentials ID
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/yashwagh30/EcoHarmonydocker.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                // Uses SonarQube server settings defined in Jenkins > Configure System
                withSonarQubeEnv('Local-SonarQube') {
                    // If sonar-scanner is on PATH or installed via Jenkins SonarQube Scanner plugin
                    bat '''
                        sonar-scanner ^
                          -Dsonar.projectKey=EcoHarmony ^
                          -Dsonar.sources=. ^
                          -Dsonar.host.url=%SONAR_HOST_URL% ^
                          -Dsonar.login=%SONAR_AUTH_TOKEN%
                    '''
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
