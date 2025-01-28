# E-Commerce Shopping Website

An intuitive and functional E-Commerce shopping platform where users can search for products, add them to their cart, view billing details, and checkout seamlessly.

If you'd like to contribute to my project, add additional features, etc, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Features

- **Product Search**: Effortlessly filter items based on search.
- **Cart Management**: Add, remove, or update items in the cart.
- **Secure Checkout**: Stripe-powered payment integration for a safe transaction experience.
- **Dynamic Billing**: Automatic calculation of totals and taxes.

## App Screenshots

### Homepage
![Home Page](https://github.com/gargiiiii18/ecommerce-shopping-website/blob/main/public/webapp%20screenshots/homepage1.png)

## Cart
![Cart](https://github.com/gargiiiii18/ecommerce-shopping-website/blob/main/public/webapp%20screenshots/cart1.png)

## Checkout
![Checkout](https://github.com/gargiiiii18/ecommerce-shopping-website/blob/main/public/webapp%20screenshots/summary.png)

## Payment
![Payment](https://github.com/gargiiiii18/ecommerce-shopping-website/blob/main/public/webapp%20screenshots/payment.png)

## Confirmation
![Confirmation](https://github.com/gargiiiii18/ecommerce-shopping-website/blob/main/public/webapp%20screenshots/confirmation.png)

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) for a fast and interactive user interface.
- **Backend**: [Node.js](https://nodejs.org/) for efficient server-side logic.
- **Database**: [MongoDB](https://www.mongodb.com/) for scalable and flexible data storage.
- **Payment Integration**: [Stripe](https://stripe.com/) for secure payments.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gargiiiii18/ecommerce-shopping-website
   cd ecommerce-shopping-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```plaintext
   MONGO_URL=<your-mongodb-uri>
   STRIPE_PUBLIC_KEY=<your-stripe-public-key>
   STRIPE_SECRET_KEY=<your-stripe-secret-key>
   SIGNING_SECRET=<your-signing-secret>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project can be deployed to any modern cloud platform supporting Node.js, such as Vercel, Netlify, or AWS. Ensure to add the environment variables during deployment.

## Contributions

Pull requests are most welcome! 🎉  
If you have ideas, suggestions, or bug fixes, feel free to fork the repository, make your changes, and submit a pull request. Let’s make this project even better together!

---

Let me know if you'd like further customization! 😊
