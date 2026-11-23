import type { RouteHandler } from '@hono/zod-openapi'
import type { getCountRoute, postCountRoute } from '../routes'

export const getCountRouteHandler: RouteHandler<typeof getCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCountRouteHandler: RouteHandler<typeof postCountRoute> = async (c) => {
  throw new Error('Not implemented')
}
