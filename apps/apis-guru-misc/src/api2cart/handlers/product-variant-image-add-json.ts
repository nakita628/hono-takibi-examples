import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductVariantImageAddJsonRoute } from '../routes'

export const postProductVariantImageAddJsonRouteHandler: RouteHandler<
  typeof postProductVariantImageAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
