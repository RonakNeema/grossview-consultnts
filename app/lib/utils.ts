/**
 * Utility functions for the application
 */

/**
 * Get the correct image path for static exports
 * With custom domain deployment, no basePath is needed
 */
export function getImagePath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath;
}
