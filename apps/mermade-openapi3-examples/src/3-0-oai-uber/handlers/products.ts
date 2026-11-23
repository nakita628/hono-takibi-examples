import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductsRoute } from '../routes'

export const getProductsRouteHandler: RouteHandler<typeof getProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}
