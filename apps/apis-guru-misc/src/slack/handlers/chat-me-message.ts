import type { RouteHandler } from '@hono/zod-openapi'
import type { postChatMeMessageRoute } from '../routes'

export const postChatMeMessageRouteHandler: RouteHandler<typeof postChatMeMessageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
