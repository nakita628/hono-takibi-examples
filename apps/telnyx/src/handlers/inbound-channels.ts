import type { RouteHandler } from '@hono/zod-openapi'
import type { getInboundChannelsRoute, patchInboundChannelsRoute } from '../routes'

export const getInboundChannelsRouteHandler: RouteHandler<typeof getInboundChannelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchInboundChannelsRouteHandler: RouteHandler<
  typeof patchInboundChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
