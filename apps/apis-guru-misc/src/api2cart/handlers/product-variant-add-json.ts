import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductVariantAddJsonRoute } from '../routes'

export const postProductVariantAddJsonRouteHandler: RouteHandler<
  typeof postProductVariantAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
