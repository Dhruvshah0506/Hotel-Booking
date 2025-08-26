# Hotel Booking System

A full-stack MERN (MongoDB, Express.js, React, Node.js) hotel booking application that allows users to browse, view, and book hotel rooms with a modern and responsive interface.

## 🏨 Features

### Core Functionality
- **Room Management**: Browse and view detailed information about hotel rooms
- **User Authentication**: Secure user registration and login system
- **Room Gallery**: Interactive image carousel for room viewing
- **Responsive Design**: Mobile-first responsive interface using React Bootstrap
- **Real-time Data**: Dynamic room availability and booking information

### User Features
- View all available rooms with detailed information
- Browse room images in an interactive gallery
- User registration and authentication
- Room booking interface (in development)
- Responsive design for all devices

### Admin Features
- Admin role management system
- User management capabilities

## 🛠 Technology Stack

### Frontend
- **React** (v19.0.0) - JavaScript library for building user interfaces
- **React Router DOM** (v7.1.1) - Client-side routing
- **React Bootstrap** (v2.10.7) - UI component library
- **Axios** (v1.7.9) - HTTP client for API requests
- **React Spinners** (v0.15.0) - Loading indicators

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** (v4.21.2) - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** (v8.9.3) - MongoDB object modeling

### Development Tools
- **Create React App** - React development setup
- **ESLint** - Code linting
- **Web Vitals** - Performance monitoring

## 📁 Project Structure

```
hotel-booking/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   │   ├── Navbar.js
│   │   │   ├── Room.js
│   │   │   ├── Loader.js
│   │   │   ├── Error.js
│   │   │   └── Success.js
│   │   ├── screens/       # Page components
│   │   │   ├── Homescreen.js
│   │   │   ├── Bookingscreen.js
│   │   │   ├── Register.js
│   │   │   └── Loginscreen.js
│   │   ├── App.js         # Main app component
│   │   └── index.js       # App entry point
│   └── package.json
├── models/                # Database schemas
│   ├── room.js           # Room model
│   └── user.js           # User model
├── routes/               # API endpoints
│   ├── roomsroute.js     # Room-related routes
│   └── usersRoute.js     # User-related routes
├── node_modules/         # Backend dependencies
├── db.js                 # Database configuration
├── server.js             # Express server setup
└── package.json          # Backend dependencies
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dhruvshah0506/Hotel-Booking.git
   cd Hotel-Booking
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URL=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the backend server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Start the React application:**
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`

## 📚 API Documentation

### Room Routes (`/api/rooms`)

#### GET `/api/rooms/getallrooms`
- **Description**: Retrieve all available rooms
- **Response**: Array of room objects
- **Example**:
  ```json
  [
    {
      "_id": "room_id",
      "name": "Deluxe Room",
      "phonenumber": 1234567890,
      "rentperday": 2500,
      "imageurls": ["url1", "url2"],
      "currentbookings": [],
      "type": "Deluxe",
      "description": "Spacious room with premium amenities",
      "maxcount": 2
    }
  ]
  ```

#### POST `/api/rooms/getroombyid`
- **Description**: Get specific room details by ID
- **Body**: `{ "roomid": "room_id" }`
- **Response**: Single room object

### User Routes (`/api/users`)

#### POST `/api/users/register`
- **Description**: Register a new user
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: Success message or error

#### POST `/api/users/login`
- **Description**: Authenticate user login
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: User object with authentication details

## 💾 Database Schema

### Room Schema
```javascript
{
  name: String (required),
  phonenumber: Number (required),
  rentperday: Number (required),
  imageurls: Array,
  currentbookings: Array,
  type: String (required),
  description: String (required),
  maxcount: Number (required, default: 3),
  timestamps: true
}
```

### User Schema
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required),
  isAdmin: Boolean (default: false),
  timestamps: true
}
```

## 🎨 Key Components

### Room Component
- Displays room information in card format
- Interactive image carousel modal
- Room details including price, capacity, and amenities
- Direct booking button integration

### Navigation Component
- Responsive navigation bar
- User authentication status
- Route navigation for different pages

### Authentication Screens
- User registration form
- Login interface
- Form validation and error handling

## 🔧 Configuration

### Proxy Configuration
The React app is configured with a proxy to the backend server:
```json
"proxy": "http://localhost:5000/"
```

### MongoDB Configuration
Database connection is configured in `db.js`:
- Connection to MongoDB Atlas
- Error handling for connection failures
- Success logging for established connections

## 🚀 Deployment

### Backend Deployment
- Set up environment variables on your hosting platform
- Configure MongoDB connection string
- Set appropriate PORT variable

### Frontend Deployment
- Run `npm run build` in the client directory
- Deploy the build folder to your hosting platform
- Update API endpoints if necessary

## 🔄 Development Workflow

### Available Scripts

**Backend:**
- `node server.js` - Start the Express server

**Frontend:**
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 Future Enhancements

- [ ] Complete booking functionality implementation
- [ ] Payment gateway integration
- [ ] Email confirmation system
- [ ] Advanced search and filtering
- [ ] Admin dashboard for room management
- [ ] Booking history and management
- [ ] Review and rating system
- [ ] Mobile app development

## 🐛 Known Issues

- Booking functionality is partially implemented
- Password encryption not implemented (security concern)
- Error handling could be improved
- Missing input validation on frontend

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Dhruv Shah**
- CSE Engineering Student specializing in AI at Parul University
- GitHub: [@Dhruvshah0506](https://github.com/Dhruvshah0506)
- LinkedIn: [Dhruv Shah](https://linkedin.com/in/Dhruv%20Shah)

---

For any questions or support, please feel free to reach out through the GitHub issues page or contact the author directly.
