import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthSessionsSessionIdRoute,
  getAuthOauth2ProviderCallbackRoute,
  getAuthOauth2ProviderRedirectRoute,
  getAuthProvidersRoute,
  postAuthOauth2TokenRoute,
  postAuthSessionsRoute,
} from '../routes'

export const postAuthSessionsRouteHandler: RouteHandler<typeof postAuthSessionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAuthSessionsSessionIdRouteHandler: RouteHandler<
  typeof deleteAuthSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthProvidersRouteHandler: RouteHandler<typeof getAuthProvidersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAuthOauth2ProviderRedirectRouteHandler: RouteHandler<
  typeof getAuthOauth2ProviderRedirectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOauth2ProviderCallbackRouteHandler: RouteHandler<
  typeof getAuthOauth2ProviderCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthOauth2TokenRouteHandler: RouteHandler<
  typeof postAuthOauth2TokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
