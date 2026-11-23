import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductsProductIdRoute, getProductsSearchRoute } from '../routes'

export const getProductsSearchRouteHandler: RouteHandler<typeof getProductsSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProductsProductIdRouteHandler: RouteHandler<
  typeof getProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
