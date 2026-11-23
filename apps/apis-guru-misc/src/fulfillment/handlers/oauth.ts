import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthAccessTokenRoute } from '../routes'

export const postOauthAccessTokenRouteHandler: RouteHandler<
  typeof postOauthAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
