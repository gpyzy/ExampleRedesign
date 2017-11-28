pipeline {
  agent {
    dockerfile {
      filename 'dockerfile'
    }
    
  }
  stages {
    stage('build') {
      steps {
        sh 'docker build -t exampleRedesign:latest'
      }
    }
    stage('run') {
      steps {
        sh 'docker run -it exampleRedesign'
      }
    }
  }
}