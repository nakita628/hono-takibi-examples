import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauthVerifyRoute,
  postOauthAccessTokenRoute,
  postOauthAuthorizeClientRoute,
  postOauthAuthorizeVimeoOauth1Route,
} from '../routes'

export const postOauthAccessTokenRouteHandler: RouteHandler<
  typeof postOauthAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthAuthorizeClientRouteHandler: RouteHandler<
  typeof postOauthAuthorizeClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthAuthorizeVimeoOauth1RouteHandler: RouteHandler<
  typeof postOauthAuthorizeVimeoOauth1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthVerifyRouteHandler: RouteHandler<typeof getOauthVerifyRoute> = async (c) => {
  throw new Error('Not implemented')
}
