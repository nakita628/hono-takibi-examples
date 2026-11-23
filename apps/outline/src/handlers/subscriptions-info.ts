import type { RouteHandler } from '@hono/zod-openapi'
import type { postSubscriptionsInfoRoute } from '../routes'

export const postSubscriptionsInfoRouteHandler: RouteHandler<
  typeof postSubscriptionsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
