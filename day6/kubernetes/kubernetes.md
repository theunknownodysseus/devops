Kubernetes:
Kubernetes is similar to dockers , like how to run multiple containers across many servers,  auto scale when traffic increases, what to do when a container crashes and total management , in short , it manages them in production = like compose does only many container in a single machine , but what if many containers in many machine 

container = workers 
Nodess (servers) = office buildings 
kubernetes =  manager who assigns and manages


Concepts :

    A pod :
        a pod is the smallest unit in kubernetes , it contains one or more containers ()one pod = one node js app + one logging container 
    
    Deployment :
        A deployment manages your pods , - running , updating and re running 

Features :

    Auto Scaling 
    Self Healing 
    Load Balancing 
    Rolling Updates & Rollbacks
    Service Discovery(pods communicate with each other )