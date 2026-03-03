<p align="center">
  <img src="https://img.shields.io/badge/TerraTrust-Land%20Records%20System-0052CC?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTMgOWwgOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnpNOSAyMnYtMTBoNnYxMCIvPjwvc3ZnPg==&logoColor=white" alt="TerraTrust" />
</p>

<h1 align="center">🏛️ TerraTrust</h1>

<p align="center">
  <strong>Blockchain-Powered Land Record Management System</strong>
</p>

<p align="center">
  A next-generation, secure, and transparent land record management platform leveraging blockchain technology, IPFS decentralized storage, and multi-admin governance — purpose-built to eliminate fraud and bring trust to land ownership.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Blockchain-SHA--256-F7931A?style=flat-square&logo=bitcoin&logoColor=white" alt="Blockchain" />
  <img src="https://img.shields.io/badge/IPFS-Storage-65C2CB?style=flat-square&logo=ipfs&logoColor=white" alt="IPFS" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <a href="#-key-features">Features</a> •
  <a href="#%EF%B8%8F-architecture">Architecture</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-api-reference">API</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 🎯 Problem Statement

Land ownership records worldwide are plagued by:

- **Fraud & Forgery** — Paper-based records are easily tampered with
- **Lack of Transparency** — Citizens cannot verify ownership independently  
- **Single Points of Failure** — Centralized databases can be altered by rogue actors
- **Bureaucratic Bottlenecks** — Single-admin approvals lead to corruption

**TerraTrust solves this** with an immutable blockchain ledger, decentralized document storage, and a multi-admin consensus mechanism that requires multiple officials to approve any change.

---

## ✨ Key Features

### 🔗 Custom Blockchain Engine
- **SHA-256 proof-of-work** consensus with configurable difficulty
- **Immutable transaction ledger** — every land record change is permanently recorded
- **Chain validation** — real-time integrity checks detect any tampering
- **Genesis block initialization** with deterministic hashing

### 🛡️ Multi-Admin Approval Workflow
- **Consensus-based governance** — requires multiple admin signatures before any record is committed
- **Cryptographic signatures** — each admin action is signed and verified
- **Department-level separation** — prevents single-point authorization fraud
- **Full audit trail** of every approval, rejection, and comment

### 📁 IPFS Decentralized Storage
- **Content-addressed storage** — documents are referenced by their cryptographic hash
- **Tamper-proof documents** — any modification changes the hash, invalidating the reference
- **Distributed persistence** — no single server can destroy records
- **Support for legal, survey, and supporting documents**

### 👥 Role-Based Access Control
| Role | Capabilities |
|------|-------------|
| **Citizen (User)** | View own records, search land registry, submit queries, track status |
| **Admin** | Approve/reject requests, manage records, respond to queries, blockchain operations |

### 🔐 Authentication & Security
- **Supabase Auth** with email/password and OAuth support
- **Row-Level Security (RLS)** policies on all database tables
- **Profile-based role verification** at every API boundary
- **Session management** with automatic token refresh

### 📊 Admin Dashboard
- Real-time statistics and analytics
- Blockchain explorer with transaction history
- Pending approval queue with one-click actions
- Query management system with priority levels
- Document viewer with IPFS integration

### 🌐 User Portal
- Land record search with multi-criteria filtering
- Document viewing and download
- Query submission with category and priority tagging
- Real-time notification system
- Status tracking for all submissions

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                            │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────────────┐  │
│  │  User Portal  │  │ Admin Panel  │  │  Blockchain Explorer  │  │
│  │  (Next.js)    │  │  (Next.js)   │  │     (Next.js)         │  │
│  └──────┬───────┘  └──────┬───────┘  └───────────┬───────────┘  │
├─────────┼──────────────────┼─────────────────────┼──────────────┤
│         │          APPLICATION LAYER              │              │
│  ┌──────▼──────────────────▼─────────────────────▼───────────┐  │
│  │              Next.js 15 App Router (SSR + CSR)             │  │
│  ├────────────────────────────────────────────────────────────┤  │
│  │  Auth Module  │  Approval Engine  │  Query System          │  │
│  └───────┬───────┴────────┬──────────┴────────┬──────────────┘  │
├──────────┼────────────────┼───────────────────┼─────────────────┤
│          │         BLOCKCHAIN LAYER            │                 │
│  ┌───────▼────────────────▼───────────────────▼──────────────┐  │
│  │              Custom Blockchain Engine                       │  │
│  │  ┌─────────┐  ┌──────────────┐  ┌──────────────────────┐  │  │
│  │  │ SHA-256  │  │  Proof-of-   │  │  Multi-Admin         │  │  │
│  │  │ Hashing  │  │  Work Mining │  │  Signature Engine    │  │  │
│  │  └─────────┘  └──────────────┘  └──────────────────────┘  │  │
│  └────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                        DATA LAYER                               │
│  ┌──────────────────┐  ┌──────────────┐  ┌─────────────────┐   │
│  │    Supabase       │  │     IPFS     │  │  Blockchain     │   │
│  │  (PostgreSQL +    │  │  Distributed │  │  Persistent     │   │
│  │   Auth + Storage) │  │  File Store  │  │  Transaction DB │   │
│  └──────────────────┘  └──────────────┘  └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow: Land Record Creation

```
Citizen Request ──► Admin 1 Reviews ──► Admin 2 Reviews ──► Consensus Reached
                                                                    │
                    ┌───────────────────────────────────────────────┘
                    ▼
            Block Mined (SHA-256) ──► Added to Chain ──► Stored in Supabase
                    │
                    ├──► Documents pinned to IPFS
                    └──► Transaction hash recorded
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | Next.js 15, React 18, Tailwind CSS | Server-side rendered UI with responsive design |
| **Language** | TypeScript 5 | Type-safe development across entire codebase |
| **Database** | Supabase (PostgreSQL) | Relational data storage with real-time subscriptions |
| **Auth** | Supabase Auth | Authentication, session management, RLS |
| **Storage** | Supabase Storage + IPFS | File uploads with decentralized backup |
| **Blockchain** | Custom engine (Node.js crypto) | SHA-256 PoW chain with digital signatures |
| **Icons** | Lucide React | Consistent, modern iconography |
| **Deployment** | Vercel | Edge-optimized hosting with cron job support |
| **Package Manager** | npm | Dependency management |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **Supabase** account ([supabase.com](https://supabase.com))

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/TerraTrust.git
cd TerraTrust

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Setup

Run the following SQL in your Supabase SQL editor to set up the required tables:

<details>
<summary>📋 Click to expand database schema</summary>

```sql
-- Profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  admin_department TEXT,
  admin_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Land Records table
CREATE TABLE land_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  land_id TEXT UNIQUE NOT NULL,
  owner_name TEXT NOT NULL,
  location TEXT NOT NULL,
  area NUMERIC NOT NULL,
  property_type TEXT NOT NULL,
  registration_date DATE NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  blockchain_hash TEXT,
  ipfs_hash TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blockchain Transactions table
CREATE TABLE blockchain_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  block_index INTEGER NOT NULL,
  block_hash TEXT NOT NULL,
  previous_hash TEXT NOT NULL,
  transaction_data JSONB NOT NULL,
  admin_signatures JSONB DEFAULT '[]',
  nonce INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Land Record Requests (Multi-Admin Approval)
CREATE TABLE land_record_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_type TEXT NOT NULL,
  land_id TEXT,
  owner_name TEXT NOT NULL,
  location TEXT NOT NULL,
  area NUMERIC,
  property_type TEXT,
  registration_date DATE,
  requested_by TEXT NOT NULL,
  approval_status TEXT DEFAULT 'pending',
  required_approvals INTEGER DEFAULT 2,
  current_approvals INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Queries table
CREATE TABLE queries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved')),
  category TEXT DEFAULT 'general',
  priority TEXT DEFAULT 'medium',
  admin_response TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE land_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE blockchain_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE land_record_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE queries ENABLE ROW LEVEL SECURITY;
```

</details>

### Running Locally

```bash
# Development server (with Turbopack)
npm run dev

# Production build
npm run build
npm start
```

The application will be available at `http://localhost:3000`.

---

## 📁 Project Structure

```
TerraTrust/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Landing page
│   │   ├── globals.css             # Global styles
│   │   ├── auth/
│   │   │   └── page.tsx            # Authentication (login/signup)
│   │   ├── admin/
│   │   │   └── dashboard/
│   │   │       ├── page.tsx        # Admin dashboard (2600+ lines)
│   │   │       └── enhanced-page.tsx
│   │   ├── user/
│   │   │   └── dashboard/
│   │   │       └── page.tsx        # User portal (1600+ lines)
│   │   └── api/
│   │       ├── cron/keep-alive/    # Supabase keep-alive cron
│   │       └── health/             # Health check endpoint
│   ├── components/
│   │   ├── BlockchainExplorer.tsx   # Visual blockchain explorer
│   │   ├── LandHistoryViewer.tsx    # Land record history viewer
│   │   ├── MultiAdminApprovalPanel.tsx # Multi-admin approval UI
│   │   └── SupabaseTest.tsx         # Database connectivity test
│   └── lib/
│       ├── blockchain.ts            # Custom blockchain engine (513 lines)
│       ├── multi-admin-approval.ts  # Approval workflow service (419 lines)
│       ├── supabase.ts              # Database client & types
│       ├── supabase-blockchain.ts   # Blockchain-DB bridge
│       ├── ipfs.ts                  # IPFS storage service
│       ├── approval.ts              # Approval utilities
│       ├── approval-enhanced.ts     # Enhanced approval logic
│       └── tamper-tests.ts          # Blockchain integrity tests
├── next.config.js                   # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── vercel.json                      # Vercel deployment config
└── package.json
```

---

## 🔌 API Reference

### Health & Monitoring

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | `GET` | System health check — returns DB connectivity, uptime |
| `/api/cron/keep-alive` | `GET` | Scheduled keep-alive ping (runs every 6 hours via Vercel Cron) |

### Authentication Flow

```
POST /auth → Supabase Auth → Profile Lookup → Role-Based Redirect
                                                  │
                                    ┌─────────────┼─────────────┐
                                    ▼             ▼             ▼
                              /user/dashboard  /admin/dashboard
```

---

## 🔒 Security Features

| Feature | Implementation |
|---------|---------------|
| **Immutable Ledger** | SHA-256 blockchain with proof-of-work prevents record tampering |
| **Multi-Admin Consensus** | Minimum 2 admin approvals required for any state change |
| **Cryptographic Signatures** | Every admin action is digitally signed with unique hashes |
| **Row-Level Security** | Supabase RLS policies enforce data access at the database level |
| **Chain Validation** | Continuous integrity checks detect unauthorized modifications |
| **Content Addressing** | IPFS content hashes ensure document authenticity |

---

## 🧪 Blockchain Integrity Testing

TerraTrust includes built-in tamper detection and blockchain validation:

```typescript
// Validate entire chain integrity
const isValid = landRecordsBlockchain.isChainValid()

// Detect tampered blocks
BlockchainUtils.detectTamperedBlocks()

// Verify admin signatures
BlockchainUtils.verifyAdminSignature(adminId, blockHash)
```

The system automatically:
- ✅ Validates chain integrity on every dashboard load
- ✅ Rebuilds in-memory blockchain from persistent storage
- ✅ Detects and flags any hash inconsistencies
- ✅ Logs all validation events for audit

---

## 🌍 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

The project includes `vercel.json` with:
- **Region**: Singapore (`sin1`) for optimized APAC latency
- **Cron jobs**: Automated health checks and Supabase keep-alive

### Environment Variables (Vercel Dashboard)

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Supabase anonymous key |

---

## 📈 Roadmap

- [ ] Smart contract integration (Ethereum/Polygon)
- [ ] GIS map visualization for land plots
- [ ] Mobile application (React Native)
- [ ] Government API integration
- [ ] Multi-language support (i18n)
- [ ] Advanced analytics dashboard
- [ ] PDF certificate generation
- [ ] QR code-based record verification
- [ ] Webhook notifications
- [ ] Bulk record import/export

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) for details on the process.

```bash
# Fork the repo, then:
git checkout -b feature/amazing-feature
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature
# Open a Pull Request
```

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>Built with ❤️ for transparent governance</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Made_with-Next.js-000?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Secured_by-Blockchain-F7931A?style=for-the-badge" alt="Blockchain" />
  <img src="https://img.shields.io/badge/Stored_on-IPFS-65C2CB?style=for-the-badge&logo=ipfs" alt="IPFS" />
</p>
