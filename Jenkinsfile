pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'it21918-patch-1', url: 'https://github.com/it21918/devops_angular.git'
            }
        }
    }
}
