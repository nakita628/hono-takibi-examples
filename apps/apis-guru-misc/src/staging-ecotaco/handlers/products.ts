import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductsIdRoute, getProductsRoute } from '../routes'

export const getProductsRouteHandler: RouteHandler<typeof getProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProductsIdRouteHandler: RouteHandler<typeof getProductsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
