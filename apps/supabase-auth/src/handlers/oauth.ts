import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauthAuthorizationsAuthorizationIdRoute,
  getOauthAuthorizeRoute,
  postOauthAuthorizationsAuthorizationIdConsentRoute,
  postOauthClientsRegisterRoute,
  postOauthTokenRoute,
} from '../routes'

export const postOauthClientsRegisterRouteHandler: RouteHandler<
  typeof postOauthClientsRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthTokenRouteHandler: RouteHandler<typeof postOauthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthAuthorizeRouteHandler: RouteHandler<typeof getOauthAuthorizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOauthAuthorizationsAuthorizationIdRouteHandler: RouteHandler<
  typeof getOauthAuthorizationsAuthorizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthAuthorizationsAuthorizationIdConsentRouteHandler: RouteHandler<
  typeof postOauthAuthorizationsAuthorizationIdConsentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
