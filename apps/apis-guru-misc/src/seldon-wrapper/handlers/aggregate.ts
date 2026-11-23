import type { RouteHandler } from '@hono/zod-openapi'
import type { getAggregateRoute, postAggregateRoute } from '../routes'

export const getAggregateRouteHandler: RouteHandler<typeof getAggregateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAggregateRouteHandler: RouteHandler<typeof postAggregateRoute> = async (c) => {
  throw new Error('Not implemented')
}
