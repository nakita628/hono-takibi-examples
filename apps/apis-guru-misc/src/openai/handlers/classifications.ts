import type { RouteHandler } from '@hono/zod-openapi'
import type { postClassificationsRoute } from '../routes'

export const postClassificationsRouteHandler: RouteHandler<
  typeof postClassificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
