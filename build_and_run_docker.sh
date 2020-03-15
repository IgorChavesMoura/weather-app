docker build -t weather-app .

docker run -d -p 4201:80 --name weather-app weather-app