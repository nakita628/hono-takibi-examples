import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsUninstallRoute } from '../routes'

export const getAppsUninstallRouteHandler: RouteHandler<typeof getAppsUninstallRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
