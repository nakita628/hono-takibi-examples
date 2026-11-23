import type { RouteHandler } from '@hono/zod-openapi'
import type { postDefendDisputeRoute } from '../routes'

export const postDefendDisputeRouteHandler: RouteHandler<typeof postDefendDisputeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
