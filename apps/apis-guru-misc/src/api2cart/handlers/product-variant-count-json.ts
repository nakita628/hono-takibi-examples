import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductVariantCountJsonRoute } from '../routes'

export const getProductVariantCountJsonRouteHandler: RouteHandler<
  typeof getProductVariantCountJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
