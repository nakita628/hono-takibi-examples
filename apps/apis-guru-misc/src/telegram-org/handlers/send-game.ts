import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendGameRoute } from '../routes'

export const postSendGameRouteHandler: RouteHandler<typeof postSendGameRoute> = async (c) => {
  throw new Error('Not implemented')
}
