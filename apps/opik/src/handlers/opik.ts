import type { RouteHandler } from '@hono/zod-openapi'
import type { postOpikAuthOauthRoute } from '../routes'

export const postOpikAuthOauthRouteHandler: RouteHandler<typeof postOpikAuthOauthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
