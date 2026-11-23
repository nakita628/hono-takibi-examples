import type { RouteHandler } from '@hono/zod-openapi'
import type { getServicesActiveRoute, getServicesAllRoute } from '../routes'

export const getServicesActiveRouteHandler: RouteHandler<typeof getServicesActiveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServicesAllRouteHandler: RouteHandler<typeof getServicesAllRoute> = async (c) => {
  throw new Error('Not implemented')
}
