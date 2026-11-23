import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendPollRoute } from '../routes'

export const postSendPollRouteHandler: RouteHandler<typeof postSendPollRoute> = async (c) => {
  throw new Error('Not implemented')
}
