import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductVariantListJsonRoute } from '../routes'

export const getProductVariantListJsonRouteHandler: RouteHandler<
  typeof getProductVariantListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
