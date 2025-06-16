pipeline {
    agent any

    tools {
        // This should match the name you gave under "Manage Jenkins" > Global Tool Configuration
        sonarScanner 'SonarScanner'
    }

    environment {
        // These are injected from the SonarQube server config (defined in Jenkins)
        SONAR_HOST_URL = 'http://localhost:9000'     // Replace with your actual SonarQube server URL
        SONAR_AUTH_TOKEN = credentials('SONAR_TOKEN') // You must create this in Jenkins credentials
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/yashwagh30/EcoHarmonydocker.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('Local-SonarQube') {
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

