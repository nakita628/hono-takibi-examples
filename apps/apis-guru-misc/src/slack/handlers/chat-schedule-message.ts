import type { RouteHandler } from '@hono/zod-openapi'
import type { postChatScheduleMessageRoute } from '../routes'

export const postChatScheduleMessageRouteHandler: RouteHandler<
  typeof postChatScheduleMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
