import type { RouteHandler } from '@hono/zod-openapi'
import type { postDataAttributesInfoRoute } from '../routes'

export const postDataAttributesInfoRouteHandler: RouteHandler<
  typeof postDataAttributesInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
