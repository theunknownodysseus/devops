We usually put our code in a server online and it gets hosted and generates ip , and that is the link for the site , but when code updates , we clone the whole new structure and remove the old one or else , f connected to hub , it just automatically does this when pull is used , so the service is restarted

But lets say this is just for frontend , a single tier arch. , what if 3 tier ? , what if 2 tier ?

All this can be automated using jenkins , step by step every job gets executed and this is the use of builds and pipelines 

A app gets developed , then it should be tested after getting packed , after testing , it gets into deployment , all this can be done using jenkins.


Jenkins Core :
        it is the main engine of jenkins , it is responsible for web ui , job execution (integration and deployment) ,  build scheduling , plugin management ,  user management , 
        without the plugins it can create jobs , run shell commands(linux commands like echo , ls , whcih can be written as a script file , .sh file which will be used to run the script which execute all the commands ) , show build results 

        ./scriptfile_name

        For example i have wrote a script file name runmyresume.sh , which runs my container "myresume"
        also in git bas it can be executed with ease using the above command , but in linux , use must need execution permission so run the below:
        
        sudo chmod +x