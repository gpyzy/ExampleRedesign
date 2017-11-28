pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'rancher-compose up -d'
      }
    }
  }
}
