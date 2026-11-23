import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatusAppdataRoute, getStatusRoute } from '../routes'

export const getStatusRouteHandler: RouteHandler<typeof getStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatusAppdataRouteHandler: RouteHandler<typeof getStatusAppdataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
