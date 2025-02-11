# Next.js E-Commerce Project

This is a **Next.js** e-commerce project that utilizes APIs for cart management, user authentication, and product handling. The frontend is built using **React (Next.js)**, and the backend is a **Ruby on Rails** application. The project interacts with APIs for all operations, removing the need for Redux.

## Features

- **Cart Management**: Fetch, add, and remove products from the cart via API calls.
- **User Authentication**: Secure login and user session management.
- **Real-Time Updates**: The cart updates dynamically using API responses.
- *

## Tech Stack

### Frontend

- **Next.js** (React Framework)
- **TypeScript**
- **Tailwind CSS** for styling
- **Material-UI** for UI components

### Backend

- **Ruby on Rails**
- **PostgreSQL** (Database)
- **Action Cable** (WebSockets for real-time communication)
- **Geocoder Gem** (For location services)
- **Firebase Cloud Messaging (FCM)** (Push notifications)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js & npm (or yarn)
- PostgreSQL
- Ruby (for Rails API)
- Firebase Account (for push notifications)

### Installation



Install dependencies:

```bash
npm install
```

### Running the Application

#### Start the Next.js Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Start the Rails API Server

Navigate to the backend folder and run:

```bash
rails server
```

The API will be available at `http://localhost:3000`.

## API Endpoints

The frontend interacts with the Rails backend through these endpoints:

### Cart APIs

- `GET /cart` - Fetch cart items
- `POST /cart` - Add a product to the cart
- `DELETE /cart/:id` - Remove a product from the cart

### Ride APIs

- `POST /rides` - Create a new ride
- `GET /rides/history` - Fetch ride history
- `GET /rides/:id` - Fetch ride details

### Notifications

- Uses **Firebase Cloud Messaging (FCM)** for push notifications.

## Deployment

Deploy the frontend using **Vercel**:

```bash
npm run build
vercel deploy
```

Deploy the backend using **Heroku**:

```bash
git push heroku main
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Rails API Guide](https://guides.rubyonrails.org/api_app.html)
- [Geocoder Gem Docs](https://github.com/alexreisner/geocoder)
- [Firebase Cloud Messaging Docs](https://firebase.google.com/docs/cloud-messaging)

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the **MIT License**.

generate reame file for this

