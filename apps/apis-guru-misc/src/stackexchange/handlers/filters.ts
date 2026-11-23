import type { RouteHandler } from '@hono/zod-openapi'
import type { getFiltersCreateRoute, getFiltersFiltersRoute } from '../routes'

export const getFiltersCreateRouteHandler: RouteHandler<typeof getFiltersCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFiltersFiltersRouteHandler: RouteHandler<typeof getFiltersFiltersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
