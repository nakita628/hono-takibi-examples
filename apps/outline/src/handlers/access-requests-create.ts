import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccessRequestsCreateRoute } from '../routes'

export const postAccessRequestsCreateRouteHandler: RouteHandler<
  typeof postAccessRequestsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
