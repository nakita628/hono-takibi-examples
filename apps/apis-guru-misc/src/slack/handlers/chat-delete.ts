import type { RouteHandler } from '@hono/zod-openapi'
import type { postChatDeleteRoute } from '../routes'

export const postChatDeleteRouteHandler: RouteHandler<typeof postChatDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}
