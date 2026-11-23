import type { RouteHandler } from '@hono/zod-openapi'
import type { getTunnelauthRoute, postTunnelauthRoute } from '../routes'

export const getTunnelauthRouteHandler: RouteHandler<typeof getTunnelauthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTunnelauthRouteHandler: RouteHandler<typeof postTunnelauthRoute> = async (c) => {
  throw new Error('Not implemented')
}
