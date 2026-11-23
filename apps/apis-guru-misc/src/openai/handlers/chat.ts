import type { RouteHandler } from '@hono/zod-openapi'
import type { postChatCompletionsRoute } from '../routes'

export const postChatCompletionsRouteHandler: RouteHandler<
  typeof postChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
