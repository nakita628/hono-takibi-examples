import type { RouteHandler } from '@hono/zod-openapi'
import type { postBotChallengeRoute } from '../routes'

export const postBotChallengeRouteHandler: RouteHandler<typeof postBotChallengeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
