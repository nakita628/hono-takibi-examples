import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccessRequestsApproveRoute } from '../routes'

export const postAccessRequestsApproveRouteHandler: RouteHandler<
  typeof postAccessRequestsApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
