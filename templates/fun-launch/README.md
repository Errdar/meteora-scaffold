# Fun Launch

A modern, feature-rich template for creating launchpad websites on Solana. Perfect for token launches, NFT drops, and other web3 projects with dynamic bonding curves.

## 🚀 Features

### Core Functionality
- **Dynamic Bonding Curves**: Create customizable price curves that adapt to market conditions
- **Token Launch Platform**: Complete token creation and deployment workflow
- **Integrated Trading**: Built-in Jupiter terminal for seamless token swapping
- **Real-time Data**: Live token metrics, charts, and transaction feeds
- **Security Audits**: Built-in security checks and audit scoring system

### Technical Features
- **Next.js 14** with App Router and TypeScript
- **Solana Web3.js** integration for blockchain interactions
- **Meteora Dynamic Bonding Curve SDK** for advanced curve mechanics
- **TradingView Charts** for professional price visualization
- **Responsive Design** with Tailwind CSS
- **Real-time Updates** via WebSocket connections
- **Cloudflare R2** integration for metadata storage

### User Experience
- **Mobile-First Design** with responsive breakpoints
- **Dark Theme** with modern gradient aesthetics
- **Interactive Charts** with trading marks and annotations
- **Live Transaction Feed** with filtering and pagination
- **Wallet Integration** supporting multiple Solana wallets
- **Social Features** with Twitter, Telegram, and website links

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- A Solana RPC endpoint
- Cloudflare R2 storage account (for production)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MeteoraAg/meteora-scaffold.git
   cd meteora-scaffold/templates/fun-launch
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables**
   ```env
   # Cloudflare R2 Storage
   R2_ACCESS_KEY_ID=your_r2_access_key_id
   R2_SECRET_ACCESS_KEY=your_r2_secret_access_key
   R2_ACCOUNT_ID=your_r2_account_id
   R2_BUCKET=your_r2_bucket_name

   # Solana Configuration
   RPC_URL=your_rpc_url
   NEXT_PUBLIC_POOL_CONFIG_KEY=your_pool_config_key

   # Partner Configuration (optional)
   NEXT_PUBLIC_PARTNER_CONFIGS=config1,config2
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Explore/         # Token exploration and discovery
│   ├── TokenCard/       # Token display components
│   ├── TokenChart/      # TradingView chart integration
│   ├── TokenHeader/     # Token information display
│   ├── TokenTransactions/ # Transaction history
│   └── ui/              # Base UI components
├── contexts/            # React context providers
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and helpers
├── pages/               # Next.js pages
│   ├── api/            # API routes
│   ├── create-pool.tsx # Token creation page
│   ├── token/[tokenId].tsx # Token detail page
│   └── index.tsx       # Home page
└── styles/             # Global styles
```

## 🎯 Key Components

### Token Creation (`/create-pool`)
- **Form Validation**: Zod schema validation for all inputs
- **File Upload**: Image upload with base64 conversion
- **Metadata Generation**: Automatic JSON metadata creation
- **Transaction Building**: Solana transaction construction
- **Wallet Integration**: Sign and send transactions

### Token Explorer (`/`)
- **Live Data Feeds**: Real-time token discovery
- **Filtering & Sorting**: Multiple sorting and filtering options
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Infinite Scroll**: Efficient data loading

### Token Details (`/token/[tokenId]`)
- **Interactive Charts**: TradingView integration with custom data feeds
- **Live Metrics**: Real-time price, volume, and holder data
- **Transaction History**: Paginated transaction feed
- **Trading Interface**: Embedded Jupiter terminal
- **Security Analysis**: Audit scores and holder distribution

## 🔧 Configuration

### Cloudflare R2 Setup
1. Create a Cloudflare account and navigate to R2
2. Create a new bucket for storing token metadata
3. Generate API tokens with appropriate permissions
4. Configure CORS settings for public access

### Solana Configuration
1. Obtain an RPC endpoint (Helius, QuickNode, etc.)
2. Deploy or obtain a pool configuration key
3. Configure partner settings if applicable

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `R2_ACCESS_KEY_ID` | Cloudflare R2 access key | Yes |
| `R2_SECRET_ACCESS_KEY` | Cloudflare R2 secret key | Yes |
| `R2_ACCOUNT_ID` | Cloudflare account ID | Yes |
| `R2_BUCKET` | R2 bucket name | Yes |
| `RPC_URL` | Solana RPC endpoint | Yes |
| `NEXT_PUBLIC_POOL_CONFIG_KEY` | Pool configuration key | Yes |
| `NEXT_PUBLIC_PARTNER_CONFIGS` | Partner configuration IDs | No |

## 🎨 Customization

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Styled with CSS modules and Tailwind
- **Theme System**: Consistent color palette and spacing
- **Responsive Design**: Mobile-first approach

### Branding
- Update colors in `tailwind.config.js`
- Replace logo and favicon in `public/`
- Modify text content in page components
- Customize gradient themes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy with automatic CI/CD

### Other Platforms
- **Netlify**: Configure build settings and environment variables
- **Railway**: Use the provided Dockerfile
- **Self-hosted**: Build and serve the static files

## 📊 Features Deep Dive

### Dynamic Bonding Curves
- **Meteora Integration**: Uses Meteora's Dynamic Bonding Curve SDK
- **Customizable Parameters**: Adjustable curve shapes and pricing
- **Real-time Updates**: Live curve progression tracking
- **Graduation Mechanics**: Automatic liquidity pool creation

### Security Features
- **Audit Scoring**: Automated security assessment
- **Holder Analysis**: Top holder percentage tracking
- **Authority Checks**: Mint/freeze authority verification
- **Organic Score**: Bot detection and organic activity measurement

### Trading Integration
- **Jupiter Terminal**: Embedded swap interface
- **Real-time Pricing**: Live price feeds and updates
- **Transaction Tracking**: Comprehensive transaction history
- **Wallet Support**: Multiple Solana wallet adapters

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the inline code comments and TypeScript types
- **Issues**: Report bugs and request features via GitHub Issues
- **Community**: Join our Discord for community support

## 🔗 Links

- **Meteora**: [https://meteora.ag](https://meteora.ag)
- **Solana**: [https://solana.com](https://solana.com)
- **Jupiter**: [https://jup.ag](https://jup.ag)
- **Next.js**: [https://nextjs.org](https://nextjs.org)

---

Built with ❤️ by the Meteora team