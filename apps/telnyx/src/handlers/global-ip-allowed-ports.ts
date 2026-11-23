import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalIpAllowedPortsRoute } from '../routes'

export const getGlobalIpAllowedPortsRouteHandler: RouteHandler<
  typeof getGlobalIpAllowedPortsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
