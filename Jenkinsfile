pipeline {
    agent any
  
    stages {
        stage('Build') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'main', url: 'https://github.com/it21918/devops_spring.git'


            }
        }


        stage('deploym to vm 1') {
            steps{
                sshagent (credentials: ['ssh-deployment-1']) {
                    sh '''
                        ansible-playbook -i ~/workspace/ansible-pipeline/hosts.yml -l deploymentservers ~/workspace/ansible-pipeline/playbooks/angular.yml
                    '''
                }

            }

        }
    }
