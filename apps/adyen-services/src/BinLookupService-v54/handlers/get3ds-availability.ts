import type { RouteHandler } from '@hono/zod-openapi'
import type { postGet3dsAvailabilityRoute } from '../routes'

export const postGet3dsAvailabilityRouteHandler: RouteHandler<
  typeof postGet3dsAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
