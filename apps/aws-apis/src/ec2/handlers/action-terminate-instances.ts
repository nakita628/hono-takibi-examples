import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTerminateInstancesRoute, postActionTerminateInstancesRoute } from '../routes'

export const getActionTerminateInstancesRouteHandler: RouteHandler<
  typeof getActionTerminateInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTerminateInstancesRouteHandler: RouteHandler<
  typeof postActionTerminateInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
