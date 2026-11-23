import type { RouteHandler } from '@hono/zod-openapi'
import type { getWellKnownJwksJsonRoute } from '../routes'

export const getWellKnownJwksJsonRouteHandler: RouteHandler<
  typeof getWellKnownJwksJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
