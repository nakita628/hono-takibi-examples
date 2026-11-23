import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthLogoutRoute, postAuthOauthValidateRoute, postAuthRoute } from '../routes'

export const postAuthRouteHandler: RouteHandler<typeof postAuthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLogoutRouteHandler: RouteHandler<typeof postAuthLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthOauthValidateRouteHandler: RouteHandler<
  typeof postAuthOauthValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
