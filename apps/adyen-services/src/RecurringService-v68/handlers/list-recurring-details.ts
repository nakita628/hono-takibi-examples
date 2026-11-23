import type { RouteHandler } from '@hono/zod-openapi'
import type { postListRecurringDetailsRoute } from '../routes'

export const postListRecurringDetailsRouteHandler: RouteHandler<
  typeof postListRecurringDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
