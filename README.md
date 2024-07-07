
# Real Estate Web App

## Description
The Real Estate Web App is a comprehensive platform designed to streamline the process of renting and selling properties. It offers a user-friendly interface where users can create accounts, list their properties, and connect with potential buyers or renters.

## Technologies Used
- **Frontend:** React, Redux, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** Firebase (for Google Authentication)

## Features
- **User Authentication:**
  - Secure user login and registration.
  - Google authentication option using Firebase.
  - Profile management for users to update their information.
- **Property Listings:**
  - Create and manage listings for renting or selling properties.
  - Upload images of the property.
  - Provide detailed descriptions, pricing, and discounts.
- **Search and Filtering:**
  - Advanced search functionality to help users find properties that match their criteria.
  - Filters for location, price range, property type, and more.
- **Contact and Booking:**
  - Direct contact options via email for potential buyers or renters to reach out to property owners.
  - Booking requests and scheduling for property visits.
- **User Dashboard:**
  - A personalized dashboard for users to manage their listings and inquiries.
  - Notifications for new messages and booking requests.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/RuchitUkani/real_estate.git
   ```

2. Navigate to the project directory:
   ```sh
   cd real_estate
   ```

3. Install the dependencies for the backend:
   ```sh
   cd backend
   npm install
   ```

4. Install the dependencies for the frontend:
   ```sh
   cd ../frontend
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```sh
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```sh
   cd ../frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. **Sign Up/Login:**
   - Users can sign up or log in using their email and password.
   - Google authentication is also available for a quicker login process.

2. **Profile Management:**
   - After logging in, users can update their profile information.

3. **Creating a Listing:**
   - Users can create new property listings by providing details such as images, description, price, and discount.
   - Listings can be managed (updated or deleted) from the user dashboard.

4. **Viewing Listings:**
   - All users can browse through available property listings using various filters.
   - Contact property owners directly through email to express interest or schedule a visit.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

