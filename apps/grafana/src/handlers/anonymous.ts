import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnonymousDevicesRoute, getAnonymousSearchRoute } from '../routes'

export const getAnonymousDevicesRouteHandler: RouteHandler<
  typeof getAnonymousDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnonymousSearchRouteHandler: RouteHandler<typeof getAnonymousSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
