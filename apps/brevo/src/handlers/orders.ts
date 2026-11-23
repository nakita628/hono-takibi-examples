import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrdersRoute, postOrdersStatusBatchRoute, postOrdersStatusRoute } from '../routes'

export const getOrdersRouteHandler: RouteHandler<typeof getOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersStatusRouteHandler: RouteHandler<typeof postOrdersStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOrdersStatusBatchRouteHandler: RouteHandler<
  typeof postOrdersStatusBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
