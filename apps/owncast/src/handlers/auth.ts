import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthIndieauthCallbackRoute,
  getAuthProviderIndieauthRoute,
  postAuthFediverseRoute,
  postAuthFediverseVerifyRoute,
  postAuthIndieauthRoute,
  postAuthProviderIndieauthRoute,
} from '../routes'

export const postAuthIndieauthRouteHandler: RouteHandler<typeof postAuthIndieauthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAuthIndieauthCallbackRouteHandler: RouteHandler<
  typeof getAuthIndieauthCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthProviderIndieauthRouteHandler: RouteHandler<
  typeof getAuthProviderIndieauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthProviderIndieauthRouteHandler: RouteHandler<
  typeof postAuthProviderIndieauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthFediverseRouteHandler: RouteHandler<typeof postAuthFediverseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAuthFediverseVerifyRouteHandler: RouteHandler<
  typeof postAuthFediverseVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
