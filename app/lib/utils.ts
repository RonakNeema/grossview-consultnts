/**
 * Utility functions for the application
 */

/**
 * Get the correct image path with basePath for static exports
 * In production (GitHub Pages), prepends the basePath to the image path
 * In development, returns the path as-is
 */
export function getImagePath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // In production, prepend basePath
  if (process.env.NODE_ENV === 'production') {
    return `/grossview-consultnts${normalizedPath}`;
  }
  
  // In development, return as-is
  return normalizedPath;
}
