import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetChatTitleRoute } from '../routes'

export const postSetChatTitleRouteHandler: RouteHandler<typeof postSetChatTitleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
