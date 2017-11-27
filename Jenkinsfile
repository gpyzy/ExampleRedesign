pipeline {
  agent {
    docker {
      args '-p 5000'
      image 'registry.docker-cn.com/microsoft/dotnet:latest'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh '''cd ExampleRedesign

ls -la'''
      }
    }
  }
}