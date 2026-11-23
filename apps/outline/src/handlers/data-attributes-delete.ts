import type { RouteHandler } from '@hono/zod-openapi'
import type { postDataAttributesDeleteRoute } from '../routes'

export const postDataAttributesDeleteRouteHandler: RouteHandler<
  typeof postDataAttributesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
