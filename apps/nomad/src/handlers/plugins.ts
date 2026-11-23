import type { RouteHandler } from '@hono/zod-openapi'
import type { getPluginsRoute } from '../routes'

export const getPluginsRouteHandler: RouteHandler<typeof getPluginsRoute> = async (c) => {
  throw new Error('Not implemented')
}
