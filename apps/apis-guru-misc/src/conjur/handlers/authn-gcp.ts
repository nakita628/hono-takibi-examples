import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthnGcpAccountStatusRoute, postAuthnGcpAccountAuthenticateRoute } from '../routes'

export const postAuthnGcpAccountAuthenticateRouteHandler: RouteHandler<
  typeof postAuthnGcpAccountAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthnGcpAccountStatusRouteHandler: RouteHandler<
  typeof getAuthnGcpAccountStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
