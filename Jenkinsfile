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

    environment {
        SONAR_TOKEN = credentials('sqa_2c3afc0b54d4b089a98d86dc3f600eb077636683')  // Add this as Jenkins secret
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/yashwagh30/EcoHarmonydocker.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('Local-SonarQube') {
                    sh 'sonar-scanner'
                }
            }
        }
    }
}
