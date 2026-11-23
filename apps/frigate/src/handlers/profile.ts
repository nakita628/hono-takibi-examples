import type { RouteHandler } from '@hono/zod-openapi'
import type { getProfileActiveRoute, getProfileRoute } from '../routes'

export const getProfileRouteHandler: RouteHandler<typeof getProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProfileActiveRouteHandler: RouteHandler<typeof getProfileActiveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
