import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionChangeMessageVisibilityRoute } from '../routes'

export const postActionChangeMessageVisibilityRouteHandler: RouteHandler<
  typeof postActionChangeMessageVisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
