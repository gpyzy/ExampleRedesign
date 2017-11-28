pipeline {
  agent none
  stages {
    stage('Build') {
      steps {
        sh 'rancher compose up -d'
      }
    }
  }
}