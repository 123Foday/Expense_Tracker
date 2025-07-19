# 💸 Expense Tracker App

A modern full-stack expense tracking app built with **Next.js**, **Clerk Authentication**, **Drizzle ORM**, and **PostgreSQL**. Users can create budgets, add expenses, and monitor spending—all securely managed with Clerk.

## 🚀 Features

- 🔐 Secure Sign-Up / Sign-In with Clerk
- 📊 Budget and Expense Management
- 📅 Date-based tracking using `moment.js`
- 💾 PostgreSQL database with Drizzle ORM
- 🎨 Stylish and responsive UI (Shadcn UI + Tailwind CSS)

## 🛠 Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Authentication:** Clerk
- **Database:** PostgreSQL (via Drizzle ORM)
- **Styling:** Tailwind CSS + Shadcn UI
- **Icons:** Lucide
- **Date Handling:** Moment.js

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/123Foday/Expense_Tracker.git
cd Expense_Tracker

npm install

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
DATABASE_URL=your_postgres_database_url

npm run dev