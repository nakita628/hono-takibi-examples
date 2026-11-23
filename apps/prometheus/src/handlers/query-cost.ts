import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueryCostRoute, postQueryCostRoute } from '../routes'

export const getQueryCostRouteHandler: RouteHandler<typeof getQueryCostRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueryCostRouteHandler: RouteHandler<typeof postQueryCostRoute> = async (c) => {
  throw new Error('Not implemented')
}
