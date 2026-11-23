import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiPluginsRoute } from '../routes'

export const getApiPluginsRouteHandler: RouteHandler<typeof getApiPluginsRoute> = async (c) => {
  throw new Error('Not implemented')
}
