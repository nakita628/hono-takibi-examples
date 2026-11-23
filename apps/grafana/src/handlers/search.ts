import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchRoute, getSearchSortingRoute } from '../routes'

export const getSearchRouteHandler: RouteHandler<typeof getSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchSortingRouteHandler: RouteHandler<typeof getSearchSortingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
