import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsRoute } from '../routes'

export const getAppsRouteHandler: RouteHandler<typeof getAppsRoute> = async (c) => {
  throw new Error('Not implemented')
}
