import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalIpUsageRoute } from '../routes'

export const getGlobalIpUsageRouteHandler: RouteHandler<typeof getGlobalIpUsageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
