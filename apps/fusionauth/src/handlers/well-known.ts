import type { RouteHandler } from '@hono/zod-openapi'
import type { getWellKnownJwksJsonRoute, getWellKnownOpenidConfigurationRoute } from '../routes'

export const getWellKnownJwksJsonRouteHandler: RouteHandler<
  typeof getWellKnownJwksJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWellKnownOpenidConfigurationRouteHandler: RouteHandler<
  typeof getWellKnownOpenidConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
