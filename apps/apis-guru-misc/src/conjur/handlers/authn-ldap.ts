import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthnLdapServiceIdAccountLoginRoute,
  postAuthnLdapServiceIdAccountLoginAuthenticateRoute,
} from '../routes'

export const getAuthnLdapServiceIdAccountLoginRouteHandler: RouteHandler<
  typeof getAuthnLdapServiceIdAccountLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthnLdapServiceIdAccountLoginAuthenticateRouteHandler: RouteHandler<
  typeof postAuthnLdapServiceIdAccountLoginAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
