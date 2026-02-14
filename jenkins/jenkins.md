# Jenkins - CI/CD Automation

## Overview
We usually put our code in a server online. When code updates, we clone the whole new structure and remove the old one. Jenkins automates this process (Builds and Pipelines).

A app gets developed -> Tested -> Packed -> Deployment.

## Jenkins Core
- **Responsibilities**: Web UI, Job Execution (Integration & Deployment), Build Scheduling, Plugin Management, User Management.
- **Shell Commands**: Can run scripts like `./runmyresume.sh`.
    - *Note*: Ensure scripts have execution permission: `sudo chmod +x script.sh`.

## Pipelines
A pipeline is one job that defines multiple stages/steps executed in order (or in parallel).

### Example Pipeline Script
```groovy
pipeline{
    agent any
    stages{
        stage('Print Hello'){
            steps{
                sh 'pwd'
                git branch: 'main',url:'https://github.com/theunknownodysseus/buildqueuetesting.git'
                echo 'Hello'
                sh 'ls'
            }
        }
        stage('Docker'){
            steps{
                sh 'docker build -t web134 .'
                sh 'docker run -d -p 5000:5000 web134'
            }
        }
    }
}
```

### Build Queue Workflow
1.  **Builder Job**: `git clone ...`
2.  **Image Job**: `docker build ...` (Triggered by Builder)
3.  **Run Job**: `docker run ...` (Triggered by Image)

## Screenshots
![Jenkins Dashboard](../day4/Screenshot%202026-02-12%20101213.png)
![Pipeline View](../day4/Screenshot%202026-02-12%20101434.png)
![Pipeline Execution](../day4/pipeline/image.png)
![Build Queue](../day4/build_queue_for_a_docker_container/image.png)
