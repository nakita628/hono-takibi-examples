import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductAttributeValueSetJsonRoute } from '../routes'

export const postProductAttributeValueSetJsonRouteHandler: RouteHandler<
  typeof postProductAttributeValueSetJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
