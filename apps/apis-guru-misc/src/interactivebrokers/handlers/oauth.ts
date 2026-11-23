import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postOauthAccessTokenRoute,
  postOauthLiveSessionTokenRoute,
  postOauthRequestTokenRoute,
} from '../routes'

export const postOauthAccessTokenRouteHandler: RouteHandler<
  typeof postOauthAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthLiveSessionTokenRouteHandler: RouteHandler<
  typeof postOauthLiveSessionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthRequestTokenRouteHandler: RouteHandler<
  typeof postOauthRequestTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
