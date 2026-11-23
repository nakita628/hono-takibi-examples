import type { RouteHandler } from '@hono/zod-openapi'
import type { postChatDeleteScheduledMessageRoute } from '../routes'

export const postChatDeleteScheduledMessageRouteHandler: RouteHandler<
  typeof postChatDeleteScheduledMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
