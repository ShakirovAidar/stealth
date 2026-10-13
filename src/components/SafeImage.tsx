import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderHeight?: string;
}

/**
 * Renders an image. If the file is missing (404), shows a dashed placeholder
 * with the expected filename so you know exactly which asset to drop in.
 */
export default function SafeImage({
  src,
  alt,
  className = '',
  placeholderHeight = 'min-h-[240px]',
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    const filename = src.split('/').pop() || src;
    return (
      <div
        className={`img-placeholder ${placeholderHeight} ${className}`}
        role="img"
        aria-label={alt}
      >
        <span>
          Asset not found:
          <br />
          <strong>{filename}</strong>
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
