import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthnAccountLoginRoute,
  postAuthnAccountLoginAuthenticateRoute,
  putAuthnAccountApiKeyRoute,
  putAuthnAccountPasswordRoute,
} from '../routes'

export const putAuthnAccountApiKeyRouteHandler: RouteHandler<
  typeof putAuthnAccountApiKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthnAccountLoginRouteHandler: RouteHandler<
  typeof getAuthnAccountLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAuthnAccountPasswordRouteHandler: RouteHandler<
  typeof putAuthnAccountPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthnAccountLoginAuthenticateRouteHandler: RouteHandler<
  typeof postAuthnAccountLoginAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
