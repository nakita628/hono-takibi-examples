import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStopInstancesRoute, postActionStopInstancesRoute } from '../routes'

export const getActionStopInstancesRouteHandler: RouteHandler<
  typeof getActionStopInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStopInstancesRouteHandler: RouteHandler<
  typeof postActionStopInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
