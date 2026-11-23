import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductAttributeValueUnsetJsonRoute } from '../routes'

export const postProductAttributeValueUnsetJsonRouteHandler: RouteHandler<
  typeof postProductAttributeValueUnsetJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
