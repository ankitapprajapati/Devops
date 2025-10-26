## Manaul Installation
    - Install nodejs locally
    - clone the repo
    - Install dependencies (npm install )
    - Start the DB locally
        -docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
        -go to neon.tech and get yourself a new db ( kept it ans DATABASE_URL)
    - Change the .env file and update the credential
    - npx prisma migrate dev
    - npx prisma generate
    - npm run build
    - npm run start

## Docker installations
    - Install docker
    - Start network
        - docker network create user_network
    - Start postgress 
        - docker run --network user_network -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - Build the image - `docker build -t user_project .`
    - Start the image - `docker run -p 3000:3000 user-project`

## Docker Compose Installations steps
    - Install docker, docker compose
    - Run `docker-compose up`