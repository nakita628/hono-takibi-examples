import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccessRequestsInfoRoute } from '../routes'

export const postAccessRequestsInfoRouteHandler: RouteHandler<
  typeof postAccessRequestsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
