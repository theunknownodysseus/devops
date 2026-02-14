# Docker Fundamentals

## What is Docker?
Docker is a platform for developing, shipping, and running applications in containers.

### Components
- **Docker Engine**: Runs the containers.
    - `Docker daemon` (background service).
    - `Docker CLI`.
- **Docker Image**: A blueprint or template. Read-only. Contains:
    - OS Layer, Application, Dependencies, Configuration.
- **Docker Container**: A running instance of an image (Class = Image, Object = Container).
    - Example: `docker run -d -p 8080:80 nginx`.
    - *Note*: Using the same ports for multiple apps creates conflicts.
- **Dockerfile**: Instructions on how to build an image.
    - `FROM`: pulls an image (use alpine for lower size).
    - `WORKDIR`: working directory.
    - `COPY`: original file -> destination file.
    - `CMD`: commands in a list of strings.
- **Docker Registry**: Central/distributed system for images.
- **Docker Hub**: Key Image Store.

### Workflow
1. Write code.
2. Create Dockerfile.
3. Build image.
4. Push image to Docker Hub.
5. Pull image on server.
6. Run the container.

## Basic Commands
*(from `commands.txt` and notes)*

### Installation (Ubuntu)
```bash
sudo apt remove docker docker-engine docker.io containerd runc -y
sudo apt install -y docker-ce docker-ce-cli containerd.io
sudo systemctl start docker
sudo usermod -aG docker $USER
```

### Common Commands
- **Check Version**: `docker --version`
- **Run Container**: `docker run hello-world`
- **List Running Containers**: `docker ps`
- **List All Containers**: `docker ps -a`
- **Build Image**: `docker build -t mytag .`
- **Run with Ports**: `docker run -d -p 8080:3000 mytag`
- **Stop Container**: `docker stop <container_id>`
- **Remove Container**: `docker rm <container_id>`
- **Exec into Container**: `docker exec -it <container_id> sh`

## Screenshots
![Docker Basics](../day2/Screenshot%202026-02-10%20153222.png)
![Docker Run](../day2/Screenshot%202026-02-10%20155453.png)
![Docker Project](../day3/Screenshot%202026-02-11%20115210.png)
