import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteProductVariantImageDeleteJsonRoute } from '../routes'

export const deleteProductVariantImageDeleteJsonRouteHandler: RouteHandler<
  typeof deleteProductVariantImageDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
