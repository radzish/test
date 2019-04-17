pipeline {

  agent {
    kubernetes {
      label 'node-pod'
      yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: node
    image: node:6
    tty: true
"""
    }
  }

//  triggers {
//    cron('0 */5 * * *')
//  }

  stages {
    stage('Run Node Script') {
      steps {
 //       git 'https://github.com/radzish/test.git'
        container('node') {
          sh 'nodejs test.js'
        }
      }
    }
  }

}

