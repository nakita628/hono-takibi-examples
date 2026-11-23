import type { RouteHandler } from '@hono/zod-openapi'
import type { getRouteRoute, postRouteBatchRoute } from '../routes'

export const getRouteRouteHandler: RouteHandler<typeof getRouteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRouteBatchRouteHandler: RouteHandler<typeof postRouteBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}
