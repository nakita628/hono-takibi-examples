import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1OrdersOrderIdRoute, getV1OrdersRoute } from '../routes'

export const getV1OrdersRouteHandler: RouteHandler<typeof getV1OrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersOrderIdRouteHandler: RouteHandler<typeof getV1OrdersOrderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
