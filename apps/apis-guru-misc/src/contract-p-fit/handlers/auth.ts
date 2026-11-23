import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthApiKeyKeyRoute,
  getAuthApiKeyInboxInboxIdRoute,
  getAuthApiKeyKeyRoute,
  getAuthApiKeyRoute,
  patchAuthApiKeyKeyRoute,
  postAuthApiKeyInboxInboxIdRoute,
  postAuthApiKeyRoute,
  postAuthEphemeralRoute,
  postAuthGetJWTRoute,
  postAuthResetPasswordRoute,
  postAuthRoute,
  postAuthTokenRoute,
} from '../routes'

export const postAuthRouteHandler: RouteHandler<typeof postAuthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApiKeyRouteHandler: RouteHandler<typeof getAuthApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApiKeyRouteHandler: RouteHandler<typeof postAuthApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApiKeyInboxInboxIdRouteHandler: RouteHandler<
  typeof getAuthApiKeyInboxInboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApiKeyInboxInboxIdRouteHandler: RouteHandler<
  typeof postAuthApiKeyInboxInboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApiKeyKeyRouteHandler: RouteHandler<
  typeof deleteAuthApiKeyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApiKeyKeyRouteHandler: RouteHandler<typeof getAuthApiKeyKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchAuthApiKeyKeyRouteHandler: RouteHandler<typeof patchAuthApiKeyKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAuthEphemeralRouteHandler: RouteHandler<typeof postAuthEphemeralRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAuthGetJWTRouteHandler: RouteHandler<typeof postAuthGetJWTRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthResetPasswordRouteHandler: RouteHandler<
  typeof postAuthResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRouteHandler: RouteHandler<typeof postAuthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
