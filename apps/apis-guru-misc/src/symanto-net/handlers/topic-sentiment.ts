import type { RouteHandler } from '@hono/zod-openapi'
import type { postTopicSentimentRoute } from '../routes'

export const postTopicSentimentRouteHandler: RouteHandler<typeof postTopicSentimentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
