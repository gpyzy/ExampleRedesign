pipeline {
  agent {
    docker {
      image 'registry.docker-cn.com/microsoft/dotnet:2.0.3-runtime'
      args '-p 5000'
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