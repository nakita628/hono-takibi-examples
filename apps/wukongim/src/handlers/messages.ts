import type { RouteHandler } from '@hono/zod-openapi'
import type { postMessagesRoute } from '../routes'

export const postMessagesRouteHandler: RouteHandler<typeof postMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}
