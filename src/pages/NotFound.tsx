import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="site-container py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-text">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center px-6 py-3 bg-action hover:bg-action-hover text-text text-sm font-medium"
      >
        Back to Home
      </Link>
    </div>
  );
}
