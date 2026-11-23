import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthAuthenticationsDeleteRoute } from '../routes'

export const postOauthAuthenticationsDeleteRouteHandler: RouteHandler<
  typeof postOauthAuthenticationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
