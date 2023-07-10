export function getBaseApiURL(path?: string) {
  return Boolean(path)
    ? `${import.meta.env.VITE_BASE_API_URL}/api/${path}`
    : `${import.meta.env.VITE_BASE_API_URL}/api/v1`;
}
