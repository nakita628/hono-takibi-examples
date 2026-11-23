import type { RouteHandler } from '@hono/zod-openapi'
import type { postSubscriptionsCreateRoute } from '../routes'

export const postSubscriptionsCreateRouteHandler: RouteHandler<
  typeof postSubscriptionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
