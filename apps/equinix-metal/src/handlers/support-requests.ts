import type { RouteHandler } from '@hono/zod-openapi'
import type { postSupportRequestsRoute } from '../routes'

export const postSupportRequestsRouteHandler: RouteHandler<
  typeof postSupportRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
