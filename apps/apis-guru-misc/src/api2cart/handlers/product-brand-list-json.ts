import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductBrandListJsonRoute } from '../routes'

export const getProductBrandListJsonRouteHandler: RouteHandler<
  typeof getProductBrandListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
