import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteAuthTokenRoute, postAuthTokenRoute } from '../routes'

export const deleteAuthTokenRouteHandler: RouteHandler<typeof deleteAuthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRouteHandler: RouteHandler<typeof postAuthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
