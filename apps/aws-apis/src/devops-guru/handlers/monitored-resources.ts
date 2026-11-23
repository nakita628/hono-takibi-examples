import type { RouteHandler } from '@hono/zod-openapi'
import type { postMonitoredResourcesRoute } from '../routes'

export const postMonitoredResourcesRouteHandler: RouteHandler<
  typeof postMonitoredResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
