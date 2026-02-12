cd /home/varun/devops/day4
docker ps > list.txt
cat list.txt
echo "Running the resume application"
docker run -d -p 8050:5000 myresume
docker ps > list.txt
cat list.txt
echo "application running in http://192.168.2.129:8050/"
