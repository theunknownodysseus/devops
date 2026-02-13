Cloud Tech:
    Resources and Services via internet removing the struggle of physical maintanence
    Types of cloud service modules:
            - IAAS(computing resources over internet)                                                         = server , storage , network
            - PAAS(they will maintain the machines , server's storage , dev focus only on writing the code)   = security , db
            - SAAS(complete software , ready to use)                                                          = app
        
 Admin handles resources , and dev configures the 

    SysOps - is new term for me , this role maintains the system architecture it seems - need more data :
                This refers to the administration, management, and maintenance of IT systems, servers, and networks, often focusing on cloud platforms like AWS.

    Based on region the billings changes because the instances running in a certain location are bound to that location alone - selecting a server should be done with most care


    EC2 - ECC - Elastic Cloud Compute - scalable cloud resources
    S3 - Storage similar to google drive but paid


    EC2 Instance :
          A machine that is running is called an instance 

    AMI - Amazon Machine Image - it is the os for the whole machine -  it is usually - Amazon Linux (which uses RedHat) , but we are using debian - so ubuntu is used 


    Instance Type: 
        vCPU , memory - RAM 

    Key Pair : aws has the public key and we have the private key which is downloaded as .pem file 
        
        .pem - private enchanced mail
        .ppk - private PuTTY

    vpc  - virtual private cloud (is used in the network) , you will have a seperate sector in the aws or else it wont be isolated 

    Public IP changes when machine restarts so we can create a elastic ip in industries 

    IOPS - Inputs per Seconds

    for specifing what kind of script we are using , we use shbang 
        using #! bin/bash

        any commang given is executed in the machine 

    Public ip is a pool of ip, you will get assigned , but if you want a specify ip just for you that is when you use elastic ip 

    Windows : vpc-0f195d208e5513464


    IAM - Identity Access Manager 