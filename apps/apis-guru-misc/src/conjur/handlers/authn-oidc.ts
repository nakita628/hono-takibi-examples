import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthnOidcServiceIdAccountAuthenticateRoute } from '../routes'

export const postAuthnOidcServiceIdAccountAuthenticateRouteHandler: RouteHandler<
  typeof postAuthnOidcServiceIdAccountAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
