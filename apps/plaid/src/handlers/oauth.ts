import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthIntrospectRoute, postOauthRevokeRoute, postOauthTokenRoute } from '../routes'

export const postOauthTokenRouteHandler: RouteHandler<typeof postOauthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthIntrospectRouteHandler: RouteHandler<
  typeof postOauthIntrospectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthRevokeRouteHandler: RouteHandler<typeof postOauthRevokeRoute> = async (c) => {
  throw new Error('Not implemented')
}
