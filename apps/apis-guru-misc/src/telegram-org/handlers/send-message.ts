import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendMessageRoute } from '../routes'

export const postSendMessageRouteHandler: RouteHandler<typeof postSendMessageRoute> = async (c) => {
  throw new Error('Not implemented')
}
