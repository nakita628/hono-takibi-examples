import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductVariantInfoJsonRoute } from '../routes'

export const getProductVariantInfoJsonRouteHandler: RouteHandler<
  typeof getProductVariantInfoJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
