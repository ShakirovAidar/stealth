import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-medium rounded-full"
      >
        Back to Home
      </Link>
    </div>
  );
}
