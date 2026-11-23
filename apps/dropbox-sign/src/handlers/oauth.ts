import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthTokenRefreshRoute, postOauthTokenRoute } from '../routes'

export const postOauthTokenRouteHandler: RouteHandler<typeof postOauthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthTokenRefreshRouteHandler: RouteHandler<
  typeof postOauthTokenRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
