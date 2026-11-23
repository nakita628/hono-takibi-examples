import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpProbeRoute } from '../routes'

export const getIpProbeRouteHandler: RouteHandler<typeof getIpProbeRoute> = async (c) => {
  throw new Error('Not implemented')
}
