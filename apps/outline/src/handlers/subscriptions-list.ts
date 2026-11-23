import type { RouteHandler } from '@hono/zod-openapi'
import type { postSubscriptionsListRoute } from '../routes'

export const postSubscriptionsListRouteHandler: RouteHandler<
  typeof postSubscriptionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
