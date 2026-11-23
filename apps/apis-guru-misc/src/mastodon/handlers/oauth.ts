import type { RouteHandler } from '@hono/zod-openapi'
import type { getOauthAuthorizeRoute, postOauthRevokeRoute, postOauthTokenRoute } from '../routes'

export const getOauthAuthorizeRouteHandler: RouteHandler<typeof getOauthAuthorizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthRevokeRouteHandler: RouteHandler<typeof postOauthRevokeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthTokenRouteHandler: RouteHandler<typeof postOauthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
