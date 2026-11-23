import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetricsEndpointsRoute, getMetricsRoute } from '../routes'

export const getMetricsRouteHandler: RouteHandler<typeof getMetricsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsEndpointsRouteHandler: RouteHandler<
  typeof getMetricsEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
