import type { RouteHandler } from '@hono/zod-openapi'
import type { postAiAlphaSearchMessagesRoute } from '../routes'

export const postAiAlphaSearchMessagesRouteHandler: RouteHandler<
  typeof postAiAlphaSearchMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
