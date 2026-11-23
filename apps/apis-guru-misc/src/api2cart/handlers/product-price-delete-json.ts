import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteProductPriceDeleteJsonRoute } from '../routes'

export const deleteProductPriceDeleteJsonRouteHandler: RouteHandler<
  typeof deleteProductPriceDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
