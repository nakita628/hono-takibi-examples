import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauthMobileRedirectRoute,
  postOauthAuthorizeRoute,
  postOauthBackchannelLogoutRoute,
  postOauthCallbackRoute,
  postOauthLinkRoute,
  postOauthUnlinkRoute,
} from '../routes'

export const postOauthAuthorizeRouteHandler: RouteHandler<typeof postOauthAuthorizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthBackchannelLogoutRouteHandler: RouteHandler<
  typeof postOauthBackchannelLogoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthCallbackRouteHandler: RouteHandler<typeof postOauthCallbackRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthLinkRouteHandler: RouteHandler<typeof postOauthLinkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthMobileRedirectRouteHandler: RouteHandler<
  typeof getOauthMobileRedirectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthUnlinkRouteHandler: RouteHandler<typeof postOauthUnlinkRoute> = async (c) => {
  throw new Error('Not implemented')
}
