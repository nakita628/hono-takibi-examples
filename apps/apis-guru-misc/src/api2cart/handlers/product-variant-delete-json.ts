import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteProductVariantDeleteJsonRoute } from '../routes'

export const deleteProductVariantDeleteJsonRouteHandler: RouteHandler<
  typeof deleteProductVariantDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
