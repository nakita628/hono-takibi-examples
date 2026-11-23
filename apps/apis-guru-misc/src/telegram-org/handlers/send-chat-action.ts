import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendChatActionRoute } from '../routes'

export const postSendChatActionRouteHandler: RouteHandler<typeof postSendChatActionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
