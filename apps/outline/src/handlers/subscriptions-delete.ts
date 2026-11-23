import type { RouteHandler } from '@hono/zod-openapi'
import type { postSubscriptionsDeleteRoute } from '../routes'

export const postSubscriptionsDeleteRouteHandler: RouteHandler<
  typeof postSubscriptionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
