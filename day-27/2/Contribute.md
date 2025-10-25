## Manaul Installation
    - Install nodejs locally
    - clone the repo
    - Install dependencies (npm install )
    - Start the DB locally
        -docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
        -go to neon.tech and get yourself a new db ( kept it ans DATABASE_URL)
    - Change the .env file and update the credential
    - npx prisma generate
    - npx prisma migrate
    - npm run build
    - npm run start

## Docker installations

## Docker Compose Installations steps