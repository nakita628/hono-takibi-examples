import type { RouteHandler } from '@hono/zod-openapi'
import type { getOauthAccessTokenRoute, getOauthRequestTokenRoute } from '../routes'

export const getOauthAccessTokenRouteHandler: RouteHandler<
  typeof getOauthAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthRequestTokenRouteHandler: RouteHandler<
  typeof getOauthRequestTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
