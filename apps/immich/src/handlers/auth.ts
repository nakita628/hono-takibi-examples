import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthPinCodeRoute,
  getAuthStatusRoute,
  postAuthAdminSignUpRoute,
  postAuthChangePasswordRoute,
  postAuthLoginRoute,
  postAuthLogoutRoute,
  postAuthPinCodeRoute,
  postAuthSessionLockRoute,
  postAuthSessionUnlockRoute,
  postAuthValidateTokenRoute,
  putAuthPinCodeRoute,
} from '../routes'

export const postAuthAdminSignUpRouteHandler: RouteHandler<
  typeof postAuthAdminSignUpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthChangePasswordRouteHandler: RouteHandler<
  typeof postAuthChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLoginRouteHandler: RouteHandler<typeof postAuthLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLogoutRouteHandler: RouteHandler<typeof postAuthLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthPinCodeRouteHandler: RouteHandler<typeof deleteAuthPinCodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAuthPinCodeRouteHandler: RouteHandler<typeof postAuthPinCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAuthPinCodeRouteHandler: RouteHandler<typeof putAuthPinCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthSessionLockRouteHandler: RouteHandler<
  typeof postAuthSessionLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthSessionUnlockRouteHandler: RouteHandler<
  typeof postAuthSessionUnlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthStatusRouteHandler: RouteHandler<typeof getAuthStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthValidateTokenRouteHandler: RouteHandler<
  typeof postAuthValidateTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
