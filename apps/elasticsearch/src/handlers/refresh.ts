import type { RouteHandler } from '@hono/zod-openapi'
import type { getRefreshRoute, postRefreshRoute } from '../routes'

export const getRefreshRouteHandler: RouteHandler<typeof getRefreshRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRefreshRouteHandler: RouteHandler<typeof postRefreshRoute> = async (c) => {
  throw new Error('Not implemented')
}
