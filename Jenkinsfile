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
dotnet publish

cd ExampleRedesign/bin/debug/netcoreapp2.0/

dotnet ExampleRedesign.dll

'''
      }
    }
  }
}