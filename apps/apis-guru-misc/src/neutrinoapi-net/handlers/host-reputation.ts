import type { RouteHandler } from '@hono/zod-openapi'
import type { getHostReputationRoute } from '../routes'

export const getHostReputationRouteHandler: RouteHandler<typeof getHostReputationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
