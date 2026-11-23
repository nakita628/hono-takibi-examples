import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendTokenRoute } from '../routes'

export const postSendTokenRouteHandler: RouteHandler<typeof postSendTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
