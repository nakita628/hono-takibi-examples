import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthenticationAuthenticationIdEligibilityCheckRoute,
  postAuthenticationAuthenticationIdAuthenticateRoute,
  postAuthenticationAuthenticationIdEligibilityCheckRoute,
  postAuthenticationAuthenticationIdEligibilityRoute,
  postAuthenticationAuthenticationIdEnabledAuthnMethodsTokenRoute,
  postAuthenticationAuthenticationIdRedirectRoute,
  postAuthenticationAuthenticationIdSyncRoute,
  postAuthenticationRoute,
} from '../routes'

export const postAuthenticationRouteHandler: RouteHandler<typeof postAuthenticationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAuthenticationAuthenticationIdEligibilityRouteHandler: RouteHandler<
  typeof postAuthenticationAuthenticationIdEligibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthenticationAuthenticationIdAuthenticateRouteHandler: RouteHandler<
  typeof postAuthenticationAuthenticationIdAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthenticationAuthenticationIdRedirectRouteHandler: RouteHandler<
  typeof postAuthenticationAuthenticationIdRedirectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthenticationAuthenticationIdSyncRouteHandler: RouteHandler<
  typeof postAuthenticationAuthenticationIdSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthenticationAuthenticationIdEnabledAuthnMethodsTokenRouteHandler: RouteHandler<
  typeof postAuthenticationAuthenticationIdEnabledAuthnMethodsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthenticationAuthenticationIdEligibilityCheckRouteHandler: RouteHandler<
  typeof postAuthenticationAuthenticationIdEligibilityCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthenticationAuthenticationIdEligibilityCheckRouteHandler: RouteHandler<
  typeof getAuthenticationAuthenticationIdEligibilityCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}
