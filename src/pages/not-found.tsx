import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cyber-gradient flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-orbitron text-6xl font-bold text-cyber-blue mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Page not found</p>
        <Link href="/">
          <a className="px-6 py-3 bg-cyber-blue text-white rounded-lg hover:bg-cyber-blue/80 transition-colors">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  );
}