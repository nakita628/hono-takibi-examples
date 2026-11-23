import type { RouteHandler } from '@hono/zod-openapi'
import type { getListChannelZoneIdRoute, getListRoute } from '../routes'

export const getListRouteHandler: RouteHandler<typeof getListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListChannelZoneIdRouteHandler: RouteHandler<
  typeof getListChannelZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
