Jenkins Core :
        it is the main engine of jenkins , it is responsible for web ui , job execution (integration and deployment) ,  build scheduling , plugin management ,  user management , 
        without the plugins it can create jobs , run shell commands(linux commands like echo , ls , whcih can be written as a script file , .sh file which will be used to run the script which execute all the commands ) , show build results 

        ./scriptfile_name

        For example i have wrote a script file name runmyresume.sh , which runs my container "myresume"
        also in git bas it can be executed with ease using the above command , but in linux , use must need execution permission so run the below:
        
        sudo chmod +x