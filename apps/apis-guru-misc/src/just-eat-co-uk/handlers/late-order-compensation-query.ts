import type { RouteHandler } from '@hono/zod-openapi'
import type { postLateOrderCompensationQueryRoute } from '../routes'

export const postLateOrderCompensationQueryRouteHandler: RouteHandler<
  typeof postLateOrderCompensationQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
