import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccessRequestsDismissRoute } from '../routes'

export const postAccessRequestsDismissRouteHandler: RouteHandler<
  typeof postAccessRequestsDismissRoute
> = async (c) => {
  throw new Error('Not implemented')
}
