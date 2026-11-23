import type { RouteHandler } from '@hono/zod-openapi'
import type { getWellKnownOauthAuthorizationServerRoute } from '../routes'

export const getWellKnownOauthAuthorizationServerRouteHandler: RouteHandler<
  typeof getWellKnownOauthAuthorizationServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
