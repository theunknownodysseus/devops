# Ansible - Configuration Management

## Overview
- **Docker**: Containerization.
- **Jenkins**: Automations.
- **Terraform**: Managing the infra/system.
- **Ansible**: Managing the resources in the system.

It is a config management and automation tool. It helps you install s/w in multiple servers, configure them, deploy apps, run cmds on many machine at once.

## Architecture
- **Control Node**: The master machine (e.g., our valid Linux VM).
- **Managed Node**: The slave machines (e.g., AWS EC2 instances).
- **Agentless**: Uses **SSH** and **Python**. No agent required on slaves.

## Key Concepts
- **Playbook**: Tells "what to do" to the slaves. Written in YAML.
- **Inventory**: Tells "about" the slaves (IPs, groups).

### File Permissions (chmod)
- 4: read
- 2: write
- 1: execute
- 7: all (4+2+1)
- *Example*: `sudo chmod 744 filename.extension`

## Commands
Run a playbook:
```bash
ansible-playbook -i inventory.ini apache-playbook.yml
```

## Screenshots
![Ansible Installation](../day6/ansible/installation.png)
![Site Status](../day6/ansible/in-the-site.png)
![Apache Status](../day6/ansible/apachestatus%20afteransible.png)
