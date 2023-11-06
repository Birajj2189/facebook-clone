# Facebook Clone App
![image](https://github.com/Birajj2189/facebook-clone/assets/93638316/9863a116-b06f-46b9-be52-37335850d2c1)
![image](https://github.com/Birajj2189/facebook-clone/assets/93638316/8f84d902-cc20-45e9-a5e4-1451e45c8792)
![image](https://github.com/Birajj2189/facebook-clone/assets/93638316/e5e7bc5a-8126-4e04-83af-8e8d6ea8689a)
![image](https://github.com/Birajj2189/facebook-clone/assets/93638316/2768138f-ce10-4a7f-9c6d-27ccd511389b)

A full-stack Facebook clone application built using the MERN (MongoDB, Express, React, Node.js) stack, along with various middleware and UI libraries. This project includes a backend API server with Express, a MongoDB database using Mongoose, and a frontend web application built with React, Tailwind CSS, and Heroicons.

## Features

- User authentication and registration.
- Creating and editing user profiles.
- Posting and deleting text and image posts.
- Liking and commenting on posts.
- Sending and accepting friend requests.
- Responsive design for desktop and mobile devices.
- A clean and user-friendly interface inspired by Facebook's design.

## Prerequisites

Before you get started, make sure you have the following tools and dependencies installed:

- Node.js and npm
- MongoDB
- Git (optional)

## Installation

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/facebook-clone-app.git
   ```

2. Navigate to the `api` folder:

   ```bash
   cd api
   ```

3. Install backend dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `api` folder and configure the following variables:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   SECRET_KEY=your_secret_key
   ```

5. Run the backend server:

   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `facebook-clone-app` folder:

   ```bash
   cd facebook-clone-app
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Run the frontend app:

   ```bash
   npm start
   ```

The app should now be accessible at `http://localhost:3000`.

## Usage

- Open your web browser and navigate to `http://localhost:3000` to access the Facebook clone app.
- Register or log in with your credentials.
- Explore and use the various features of the app, including creating posts, sending friend requests, and more.

## API Routes

- The backend API routes are defined in the `api/routes` folder. You can extend these routes to add more features or modify existing ones.

## Technologies Used

- Backend:
  - Express.js
  - MongoDB and Mongoose
  - Nodemon
  - Helmet
  - Morgan
  - CORS
  - Dotenv

- Frontend:
  - React
  - Tailwind CSS
  - Heroicons

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with clear, concise messages.
- Push your changes to your fork.
- Create a pull request, explaining the changes you've made and why they should be merged.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was inspired by Facebook's design and functionality. Thanks to the MERN stack and various libraries for making it possible to create a Facebook clone app.

## Contact

For any questions or inquiries, please contact [Biraj Mahanta](mailto:bmahanta.work@gmail.com).

---

Enjoy exploring and using the Facebook clone app! If you have any issues or suggestions, feel free to reach out. Happy coding!
