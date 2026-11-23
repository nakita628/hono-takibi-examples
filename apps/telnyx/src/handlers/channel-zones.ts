import type { RouteHandler } from '@hono/zod-openapi'
import type { getChannelZonesRoute, putChannelZonesChannelZoneIdRoute } from '../routes'

export const getChannelZonesRouteHandler: RouteHandler<typeof getChannelZonesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putChannelZonesChannelZoneIdRouteHandler: RouteHandler<
  typeof putChannelZonesChannelZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
