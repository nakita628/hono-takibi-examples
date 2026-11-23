import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductAttributeListJsonRoute } from '../routes'

export const getProductAttributeListJsonRouteHandler: RouteHandler<
  typeof getProductAttributeListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
