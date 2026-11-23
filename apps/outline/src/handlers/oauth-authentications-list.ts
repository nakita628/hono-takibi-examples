import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthAuthenticationsListRoute } from '../routes'

export const postOauthAuthenticationsListRouteHandler: RouteHandler<
  typeof postOauthAuthenticationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
