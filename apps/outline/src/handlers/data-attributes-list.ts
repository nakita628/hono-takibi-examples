import type { RouteHandler } from '@hono/zod-openapi'
import type { postDataAttributesListRoute } from '../routes'

export const postDataAttributesListRouteHandler: RouteHandler<
  typeof postDataAttributesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
