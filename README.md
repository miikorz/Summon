# Summon

Summon is a monorepo project designed to manage game events and applications. It is built using a modern tech stack with a focus on type safety and code sharing between the backend and mobile frontend.

## 🏗 Project Structure

This project is a monorepo managed by **pnpm workspaces** and **Turbo**.

```
.
├── apps/
│   ├── api/          # Backend API (Fastify + Mongoose)
│   └── mobile/       # Mobile App (React Native + Expo)
├── packages/
│   └── types/        # Shared TypeScript definitions
├── docker-compose.yml # Docker configuration for MongoDB
├── package.json      # Root configuration
└── turbo.json        # Turbo pipeline configuration
```

## 🚀 Tech Stack

- **Monorepo:** [Turbo](https://turbo.build/), [pnpm](https://pnpm.io/)
- **Backend (`apps/api`):**
  - [Fastify](https://www.fastify.io/) - Fast and low overhead web framework
  - [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
  - [TypeScript](https://www.typescriptlang.org/)
- **Mobile (`apps/mobile`):**
  - [Expo](https://expo.dev/) - React Native framework
  - [React Native](https://reactnative.dev/)
  - [TanStack Query](https://tanstack.com/query/latest) - Data fetching
  - [Axios](https://axios-http.com/) - HTTP client
- **Database:**
  - [MongoDB](https://www.mongodb.com/)
  - [Mongo Express](https://github.com/mongo-express/mongo-express) - Web-based MongoDB admin interface

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/installation) (`npm install -g pnpm`)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for running the database)

## 🏁 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd Summon
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Start the Database:**
    Make sure Docker is running, then start the MongoDB services:

    ```bash
    docker compose up -d
    ```

    - **MongoDB** will be available at `mongodb://localhost:27017`
    - **Mongo Express** (Admin UI) will be available at `http://localhost:8081`
      - **Username:** `admin`
      - **Password:** `password123`

4.  **Run the Development Environment:**
    This command starts all applications (`api`, `mobile`, and `types` watcher) in parallel using Turbo:
    ```bash
    pnpm dev
    ```

## 📦 Scripts

- `pnpm dev`: Starts the development server for all apps and packages.
- `pnpm build`: Builds all apps and packages.
- `pnpm test`: Runs tests (currently placeholder).

## 🔧 Environment Variables

### API (`apps/api/.env`)

Ensure you have a `.env` file in `apps/api` (if required by the code, though `docker-compose` handles DB creds).
Example:

```env
PORT=3000
MONGO_URI=mongodb://admin:password123@localhost:27017/summon?authSource=admin
```

## 📱 Mobile App Development

The mobile app is built with Expo. When you run `pnpm dev`, the Metro bundler will start.

- Press `i` to open in iOS Simulator.
- Press `a` to open in Android Emulator.
- Scan the QR code with the Expo Go app on your physical device.
