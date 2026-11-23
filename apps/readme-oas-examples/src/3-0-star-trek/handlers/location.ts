import type { RouteHandler } from '@hono/zod-openapi'
import type { getLocationRoute, getLocationSearchRoute, postLocationSearchRoute } from '../routes'

export const getLocationRouteHandler: RouteHandler<typeof getLocationRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocationSearchRouteHandler: RouteHandler<typeof getLocationSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLocationSearchRouteHandler: RouteHandler<typeof postLocationSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
