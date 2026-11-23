import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthnIamServiceIdAccountLoginAuthenticateRoute } from '../routes'

export const postAuthnIamServiceIdAccountLoginAuthenticateRouteHandler: RouteHandler<
  typeof postAuthnIamServiceIdAccountLoginAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
