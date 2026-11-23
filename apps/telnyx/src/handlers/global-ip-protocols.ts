import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalIpProtocolsRoute } from '../routes'

export const getGlobalIpProtocolsRouteHandler: RouteHandler<
  typeof getGlobalIpProtocolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
