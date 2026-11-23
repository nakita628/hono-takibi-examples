import type { RouteHandler } from '@hono/zod-openapi'
import type { postSentimentRoute } from '../routes'

export const postSentimentRouteHandler: RouteHandler<typeof postSentimentRoute> = async (c) => {
  throw new Error('Not implemented')
}
