import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAuthnJwtServiceIdAccountAuthenticateRoute,
  postAuthnJwtServiceIdAccountIdAuthenticateRoute,
} from '../routes'

export const postAuthnJwtServiceIdAccountAuthenticateRouteHandler: RouteHandler<
  typeof postAuthnJwtServiceIdAccountAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthnJwtServiceIdAccountIdAuthenticateRouteHandler: RouteHandler<
  typeof postAuthnJwtServiceIdAccountIdAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
