import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrdersOrderIdRoute, getOrdersRoute } from '../routes'

export const getOrdersRouteHandler: RouteHandler<typeof getOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrdersOrderIdRouteHandler: RouteHandler<typeof getOrdersOrderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
