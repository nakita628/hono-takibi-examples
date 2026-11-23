import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWellKnownOauthAuthorizationServerRoute,
  getWellKnownOauthProtectedResourceRoute,
} from '../routes'

export const getWellKnownOauthAuthorizationServerRouteHandler: RouteHandler<
  typeof getWellKnownOauthAuthorizationServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWellKnownOauthProtectedResourceRouteHandler: RouteHandler<
  typeof getWellKnownOauthProtectedResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
