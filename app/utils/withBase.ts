/**
 * Prefix a root-absolute path (e.g. `/projects/x.jpg`, `/about`) with the app's
 * `app.baseURL` so it resolves when the site is served from a sub-path.
 *
 * GitHub Pages serves this project site from `/portfolio/`, so any hardcoded
 * `/foo` path would otherwise point at the domain root and 404.
 */
export function withBase(path: string): string {
  const base = useRuntimeConfig().app.baseURL.replace(/\/+$/, '')
  return `${base}${path}`
}
