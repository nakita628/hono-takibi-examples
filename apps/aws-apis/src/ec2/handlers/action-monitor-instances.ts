import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionMonitorInstancesRoute, postActionMonitorInstancesRoute } from '../routes'

export const getActionMonitorInstancesRouteHandler: RouteHandler<
  typeof getActionMonitorInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionMonitorInstancesRouteHandler: RouteHandler<
  typeof postActionMonitorInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
