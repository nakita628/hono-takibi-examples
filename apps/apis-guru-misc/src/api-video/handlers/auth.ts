import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthApiKeyRoute, postAuthRefreshRoute } from '../routes'

export const postAuthApiKeyRouteHandler: RouteHandler<typeof postAuthApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRefreshRouteHandler: RouteHandler<typeof postAuthRefreshRoute> = async (c) => {
  throw new Error('Not implemented')
}
