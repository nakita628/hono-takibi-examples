import type { RouteHandler } from '@hono/zod-openapi'
import type { postAvailableProductsRoute } from '../routes'

export const postAvailableProductsRouteHandler: RouteHandler<
  typeof postAvailableProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
