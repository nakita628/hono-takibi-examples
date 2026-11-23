import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthTokensRoute } from '../routes'

export const postOauthTokensRouteHandler: RouteHandler<typeof postOauthTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}
