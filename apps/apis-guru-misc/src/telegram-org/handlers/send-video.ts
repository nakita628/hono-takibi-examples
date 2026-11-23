import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendVideoRoute } from '../routes'

export const postSendVideoRouteHandler: RouteHandler<typeof postSendVideoRoute> = async (c) => {
  throw new Error('Not implemented')
}
