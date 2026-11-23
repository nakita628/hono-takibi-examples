import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchAdvancedRoute, getSearchRoute } from '../routes'

export const getSearchRouteHandler: RouteHandler<typeof getSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchAdvancedRouteHandler: RouteHandler<typeof getSearchAdvancedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
