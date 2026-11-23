import type { RouteHandler } from '@hono/zod-openapi'
import type { postPromotionalGrantsRoute } from '../routes'

export const postPromotionalGrantsRouteHandler: RouteHandler<
  typeof postPromotionalGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
