# 🍽️ MealMesh

A modern, fully-functional food delivery platform built with React, TypeScript, and Tailwind CSS. MealMesh provides a complete solution for customers, restaurant owners, and delivery partners with a stunning, responsive interface.

![MealMesh](https://img.shields.io/badge/version-1.0.0-orange) ![License](https://img.shields.io/badge/license-MIT-green) ![React](https://img.shields.io/badge/React-19.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)

## ✨ Features

### 📱 Customer Portal
- **Restaurant Discovery**: Browse restaurants with beautiful cards, ratings, and delivery info
- **Advanced Search**: Search by restaurant name or cuisine type
- **Menu Exploration**: View detailed menus with images, descriptions, and prices
- **Smart Cart**: Add items, adjust quantities, real-time price calculations
- **Order Placement**: Seamless checkout experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### 🛠️ Admin Panel
- **Dashboard Overview**: Key metrics including orders, revenue, and active deliveries
- **Order Management**: Track and update order statuses through the delivery lifecycle
- **Delivery Assignment**: Assign delivery partners to orders
- **Restaurant Management**: View and manage restaurant listings
- **Partner Tracking**: Monitor delivery partner availability and status
- **Real-time Updates**: Live status updates across all orders

### 🚚 Delivery Partner Portal
- **Order Acceptance**: Accept new orders from the available pool
- **Active Delivery Tracking**: Track current deliveries with pickup/drop-off details
- **Status Updates**: Update delivery status (picked up → delivered)
- **Navigation Support**: Built-in navigation integration
- **Earnings Dashboard**: Track daily earnings and completed orders
- **Customer Communication**: Quick access to contact customers

## 🚀 Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.3.1** - Build tool and dev server
- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **Framer Motion 12.35.0** - Animation library
- **React Router DOM 7.13.1** - Client-side routing
- **Lucide React 0.577.0** - Icon library
- **Zustand** - State management

### Development Tools
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking
- **Vite** - Fast HMR and optimized builds

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher) or yarn (v1.22 or higher)
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mealmesh.git
   cd mealmesh
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage Guide

### Switching Between Portals

MealMesh includes three portals that you can switch between using the portal selector at the top of the screen:

1. **Customer Portal** - Browse restaurants, view menus, and place orders
2. **Admin Panel** - Manage orders, restaurants, and delivery partners
3. **Delivery Portal** - Accept and deliver orders as a delivery partner

### Customer Workflow

1. Browse the featured restaurants or search for specific cuisines
2. Click on a restaurant to view its menu
3. Add items to your cart by clicking the "+" button
4. View your cart by clicking the cart icon in the bottom right corner
5. Adjust quantities or remove items as needed
6. Click "Place Order" to complete your order

### Admin Workflow

1. View the dashboard for an overview of platform activity
2. Go to the "Orders" tab to manage incoming orders
3. Update order statuses: Pending → Preparing → Ready → Picked Up → Delivered
4. Assign delivery partners to orders that are ready for pickup
5. Monitor restaurant and delivery partner performance

### Delivery Partner Workflow

1. View available orders in the "New Orders Available" section
2. Accept an order to begin delivery
3. Navigate to the restaurant for pickup
4. Update status to "Picked Up" after collecting the order
5. Navigate to the customer's location
6. Mark the order as "Delivered" to complete the delivery

## 📁 Project Structure

```
mealmesh/
├── public/
│   └── favicon.svg          # App favicon
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CartDrawer.tsx   # Shopping cart slide-out
│   │   ├── CustomerHeader.tsx # Customer portal header
│   │   ├── MenuItemCard.tsx # Menu item display card
│   │   ├── PortalSelector.tsx # Portal switcher
│   │   └── RestaurantCard.tsx # Restaurant display card
│   ├── data/
│   │   └── mockData.ts      # Sample data for restaurants, menu items, orders
│   ├── lib/
│   │   └── store.ts         # Zustand state management
│   ├── pages/
│   │   ├── AdminPanel.tsx   # Admin dashboard
│   │   ├── CustomerPortal.tsx # Customer interface
│   │   └── DeliveryPortal.tsx # Delivery partner interface
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.tsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.ts           # Vite build configuration
```

## 🏗️ Architecture

### Data Flow

```
User Action → Component → Zustand Store → State Update → UI Re-render
```

### State Management

MealMesh uses Zustand for global state management:

- **Cart**: Manage items, quantities, and totals
- **Orders**: Track all orders with statuses
- **Portal**: Switch between Customer, Admin, and Delivery views

### Type System

All data structures are fully typed with TypeScript:

```typescript
// Core Types
interface Restaurant { ... }
interface MenuItem { ... }
interface Order { ... }
interface CartItem { ... }
interface DeliveryPartner { ... }
```

## 🎨 Design System

### Color Palette

- **Primary**: Amber-500 to Orange-500 gradient
- **Background**: Slate-950 (#0f172a)
- **Cards**: Slate-900/50 with backdrop blur
- **Text**: White (primary), Slate-400 (secondary)

### Visual Style

- **Glassmorphism**: Frosted glass cards with backdrop blur
- **Gradients**: Subtle gradient overlays for depth
- **Animations**: Smooth transitions using Framer Motion
- **Typography**: Inter font family for readability

## 🔧 Configuration

### Environment Variables

Currently, the app uses mock data. For production, you would need:

```env
VITE_API_URL=https://api.mealmesh.com
VITE_GOOGLE_MAPS_KEY=your_google_maps_api_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### Build Configuration

- **Production Build**: `npm run build`
- **Preview Build**: `npm run preview`
- **Type Check**: `npx tsc --noEmit`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect and build the project
4. Deploy!

### Other Platforms

The app can be deployed to any static hosting service:
- Netlify
- AWS Amplify
- GitHub Pages
- Cloudflare Pages

## 📊 API Integration (Future)

The current implementation uses mock data. For production, integrate with:

### Backend Endpoints

```typescript
// Restaurants
GET /api/restaurants
GET /api/restaurants/:id
GET /api/restaurants/:id/menu

// Orders
POST /api/orders
GET /api/orders
GET /api/orders/:id
PUT /api/orders/:id/status
PUT /api/orders/:id/assign-partner

// Auth
POST /api/auth/login
POST /api/auth/register

// Payments
POST /api/payments/create-intent
POST /api/payments/confirm
```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run with coverage
npm run test:coverage

# Run linter
npm run lint
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 Roadmap

### Phase 1: MVP (Current)
- ✅ Customer portal with browsing and ordering
- ✅ Admin panel with order management
- ✅ Delivery partner portal
- ✅ Responsive design

### Phase 2: Enhanced Features
- [ ] User authentication (JWT)
- [ ] Real-time order tracking
- [ ] Payment integration (Stripe/Razorpay)
- [ ] Push notifications
- [ ] Order history
- [ ] Favorites and reviews

### Phase 3: Advanced Features
- [ ] AI-powered recommendations
- [ ] Subscription meal plans
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Promo code system
- [ ] Live chat support

### Phase 4: Scaling
- [ ] Mobile app (React Native)
- [ ] Advanced caching with Redis
- [ ] Microservices architecture
- [ ] Kubernetes deployment
- [ ] CDN integration

## 🐛 Known Issues

- Mock data is used instead of real API calls
- No persistent storage (refreshing clears state)
- Google Maps integration not yet implemented
- Payment gateway not integrated

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Product Manager**: [Your Name]
- **Lead Developer**: [Your Name]
- **UI/UX Designer**: [Your Name]

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the amazing CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

## 📞 Support

For support, email support@mealmesh.com or join our Slack channel.

## 🌟 Star History

If you find this project helpful, please consider giving it a star ⭐

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
