import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauthAuthorizeRoute,
  getOauthRightsRoute,
  postOauthAccessTokenQueryRoute,
  postOauthAccessTokenRoute,
  postOauthAuthorizeRoute,
  postOauthRequestTokenQueryRoute,
  postOauthRequestTokenRoute,
} from '../routes'

export const postOauthAccessTokenRouteHandler: RouteHandler<
  typeof postOauthAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthAccessTokenQueryRouteHandler: RouteHandler<
  typeof postOauthAccessTokenQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthAuthorizeRouteHandler: RouteHandler<typeof getOauthAuthorizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthAuthorizeRouteHandler: RouteHandler<typeof postOauthAuthorizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthRequestTokenRouteHandler: RouteHandler<
  typeof postOauthRequestTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthRequestTokenQueryRouteHandler: RouteHandler<
  typeof postOauthRequestTokenQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthRightsRouteHandler: RouteHandler<typeof getOauthRightsRoute> = async (c) => {
  throw new Error('Not implemented')
}
