import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthOauthProviderRoute,
  getAuthOauthRoute,
  postAuthLoginRoute,
  postAuthLogoutRoute,
  postAuthPasswordRequestRoute,
  postAuthPasswordResetRoute,
  postAuthRefreshRoute,
} from '../routes'

export const postAuthLoginRouteHandler: RouteHandler<typeof postAuthLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRefreshRouteHandler: RouteHandler<typeof postAuthRefreshRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLogoutRouteHandler: RouteHandler<typeof postAuthLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthPasswordRequestRouteHandler: RouteHandler<
  typeof postAuthPasswordRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthPasswordResetRouteHandler: RouteHandler<
  typeof postAuthPasswordResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOauthRouteHandler: RouteHandler<typeof getAuthOauthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOauthProviderRouteHandler: RouteHandler<
  typeof getAuthOauthProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
