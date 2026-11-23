import type { RouteHandler } from '@hono/zod-openapi'
import type { postDataAttributesUpdateRoute } from '../routes'

export const postDataAttributesUpdateRouteHandler: RouteHandler<
  typeof postDataAttributesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
