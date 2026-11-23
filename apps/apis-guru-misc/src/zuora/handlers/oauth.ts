import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthTokenRoute } from '../routes'

export const postOauthTokenRouteHandler: RouteHandler<typeof postOauthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
