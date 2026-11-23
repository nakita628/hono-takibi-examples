import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetGameHighScoresRoute } from '../routes'

export const postGetGameHighScoresRouteHandler: RouteHandler<
  typeof postGetGameHighScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}
