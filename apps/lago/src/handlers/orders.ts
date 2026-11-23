import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrdersLagoIdRoute, getOrdersRoute, postOrdersLagoIdExecuteRoute } from '../routes'

export const getOrdersRouteHandler: RouteHandler<typeof getOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrdersLagoIdRouteHandler: RouteHandler<typeof getOrdersLagoIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersLagoIdExecuteRouteHandler: RouteHandler<
  typeof postOrdersLagoIdExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
