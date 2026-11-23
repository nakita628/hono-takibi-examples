import type { RouteHandler } from '@hono/zod-openapi'
import type { postChatUpdateRoute } from '../routes'

export const postChatUpdateRouteHandler: RouteHandler<typeof postChatUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}
