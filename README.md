# Intern Software Developer Assessment

## Project Structure

The project structure consists of two folders, frontend and backend.

To run the overall app, first, modify the backend/.env file DATABASE_URL field such that it points to a valid mongoDB database initialised with the data.json file. The mongoDB database should have the Database name (University) and Collection name (universities).

The backend can be started by running `npm run start` which will start the backend server on port 5050.

Then, the frontend React App can be ran be going into frontend/ and running the command `npm run start`. This will start up the frontend webpage on port 3000.
