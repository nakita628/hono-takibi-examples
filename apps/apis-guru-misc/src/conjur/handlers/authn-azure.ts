import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthnAzureServiceIdAccountLoginAuthenticateRoute } from '../routes'

export const postAuthnAzureServiceIdAccountLoginAuthenticateRouteHandler: RouteHandler<
  typeof postAuthnAzureServiceIdAccountLoginAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
