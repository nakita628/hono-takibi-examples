import type { RouteHandler } from '@hono/zod-openapi'
import type { getPluginCsiPluginIDRoute } from '../routes'

export const getPluginCsiPluginIDRouteHandler: RouteHandler<
  typeof getPluginCsiPluginIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
