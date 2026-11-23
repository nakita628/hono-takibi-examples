import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalIpLatencyRoute } from '../routes'

export const getGlobalIpLatencyRouteHandler: RouteHandler<typeof getGlobalIpLatencyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
