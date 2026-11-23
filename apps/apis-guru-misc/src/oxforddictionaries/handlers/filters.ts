import type { RouteHandler } from '@hono/zod-openapi'
import type { getFiltersEndpointRoute, getFiltersRoute } from '../routes'

export const getFiltersRouteHandler: RouteHandler<typeof getFiltersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFiltersEndpointRouteHandler: RouteHandler<typeof getFiltersEndpointRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
