import type { RouteHandler } from '@hono/zod-openapi'
import type { postDataAttributesCreateRoute } from '../routes'

export const postDataAttributesCreateRouteHandler: RouteHandler<
  typeof postDataAttributesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
