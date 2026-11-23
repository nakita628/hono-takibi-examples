import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueryRangeRoute, postQueryRangeRoute } from '../routes'

export const getQueryRangeRouteHandler: RouteHandler<typeof getQueryRangeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueryRangeRouteHandler: RouteHandler<typeof postQueryRangeRoute> = async (c) => {
  throw new Error('Not implemented')
}
