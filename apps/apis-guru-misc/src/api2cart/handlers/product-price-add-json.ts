import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductPriceAddJsonRoute } from '../routes'

export const postProductPriceAddJsonRouteHandler: RouteHandler<
  typeof postProductPriceAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
