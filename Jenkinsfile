pipeline {
    agent any

    environment {
        // This must match the name of your SonarQube server in "Configure System"
        SONARQUBE_SERVER = 'Local-SonarQube'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/yashwagh30/EcoHarmonydocker.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${SONARQUBE_SERVER}") {
                    sh '''
                        sonar-scanner \
                        -Dsonar.projectKey=eco-harmony \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://localhost:9000 \
                        -Dsonar.login=${SONAR_TOKEN}
                    '''
                }
            }
        }
    }

    // Make sure to bind SONAR_TOKEN from credentials
    // either in the pipeline UI or using credentials binding plugin
}
