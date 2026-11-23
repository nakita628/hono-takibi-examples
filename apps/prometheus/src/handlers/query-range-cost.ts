import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueryRangeCostRoute, postQueryRangeCostRoute } from '../routes'

export const getQueryRangeCostRouteHandler: RouteHandler<typeof getQueryRangeCostRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postQueryRangeCostRouteHandler: RouteHandler<typeof postQueryRangeCostRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
