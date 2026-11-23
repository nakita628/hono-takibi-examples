import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthOauthTokenRoute } from '../routes'

export const postAuthOauthTokenRouteHandler: RouteHandler<typeof postAuthOauthTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
