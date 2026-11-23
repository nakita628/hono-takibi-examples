import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchShardsRoute, postSearchShardsRoute } from '../routes'

export const getSearchShardsRouteHandler: RouteHandler<typeof getSearchShardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchShardsRouteHandler: RouteHandler<typeof postSearchShardsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
