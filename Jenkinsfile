pipeline {

  agent {
    kubernetes {
      label 'node-pod'
      yamlFile 'k8s.yaml'
    }
  }

//  triggers {
//    cron('0 */5 * * *')
//  }

  stages {
    stage('Run Node Script') {
      steps {
        container('node') {
          sh 'nodejs test.js'
        }
      }
    }
  }

}

