import type { RouteHandler } from '@hono/zod-openapi'
import type { postChatTokenizeRoute } from '../routes'

export const postChatTokenizeRouteHandler: RouteHandler<typeof postChatTokenizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
