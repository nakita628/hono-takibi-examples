import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthRefreshRoute, postAuthTokenRoute } from '../routes'

export const postAuthRefreshRouteHandler: RouteHandler<typeof postAuthRefreshRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRouteHandler: RouteHandler<typeof postAuthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
