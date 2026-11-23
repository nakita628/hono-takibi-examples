import type { RouteHandler } from '@hono/zod-openapi'
import type { postAcceptDisputeRoute } from '../routes'

export const postAcceptDisputeRouteHandler: RouteHandler<typeof postAcceptDisputeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
