Docker - Containerization
Jenkins - Automations
Terraform - Managing the infra/system
Ansible - Managing the resources in the system

Ansible:
there can be a master machine and it can control multiple slave machine at a time , for e.g. , i request the master for a httpd service , it makes the slave to install httpd, in companies , it does updates and new s/w installation , like each can have dockers, terraforrm in company

it is a config. management and automation tool 
it helps you :
    install s/w in multiple servers , configure them , deploy apps , run cmds on many machine at once 

Ansible does NOT need an agent on the slave node 
it uses :      
        SSH, Python

        Arch.:
        control node ---> Managed Node
        (our vm linux)--> (AWS EC2 instances)

        in chmod :
                    4 - read
                    2 - write 
                    1 - execute
                    0 - none
                    7 - all           like 400 , 700 , 744 in chmod , sudo chmod 744 filename.extension

- Playbook tells what to do to the slaves 
- Inventory tells about the slaves 


ansible-playboook -1 inventory.ini apache-playbook.yml