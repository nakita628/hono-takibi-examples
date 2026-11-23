import type { RouteHandler } from '@hono/zod-openapi'
import type { postChatUnfurlRoute } from '../routes'

export const postChatUnfurlRouteHandler: RouteHandler<typeof postChatUnfurlRoute> = async (c) => {
  throw new Error('Not implemented')
}
