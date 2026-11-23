import type { RouteHandler } from '@hono/zod-openapi'
import type { getWindowshostingsDomainNameRoute, getWindowshostingsRoute } from '../routes'

export const getWindowshostingsRouteHandler: RouteHandler<typeof getWindowshostingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWindowshostingsDomainNameRouteHandler: RouteHandler<
  typeof getWindowshostingsDomainNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
