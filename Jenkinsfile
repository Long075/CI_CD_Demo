pipeline {
    parameters {
        choice(
            name: 'ENV',
            choices: ['POSVN', 'Nothing'],
            description: 'Chọn đường link'
        )
    }

    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        BASE_URL = "${params.ENV == 'production' ? 'https://prod.com' : 'https://staging.com'}"
        API_USERNAME = credentials('API_USERNAME')
        API_PASSWORD = credentials('API_PASSWORD')
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Long075/CI_CD_Demo'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm run test:ci'
            }
        }
    }

    post {
        always {
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                keepAll: true,
                alwaysLinkToLastBuild: true
            ])

            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
}