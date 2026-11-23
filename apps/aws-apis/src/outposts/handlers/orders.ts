import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrdersOrderIdRoute,
  postOrdersOrderIdCancelRoute,
  postOrdersRoute,
} from '../routes'

export const postOrdersOrderIdCancelRouteHandler: RouteHandler<
  typeof postOrdersOrderIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersRouteHandler: RouteHandler<typeof postOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrdersOrderIdRouteHandler: RouteHandler<typeof getOrdersOrderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
