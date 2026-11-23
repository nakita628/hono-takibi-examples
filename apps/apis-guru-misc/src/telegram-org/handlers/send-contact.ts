import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendContactRoute } from '../routes'

export const postSendContactRouteHandler: RouteHandler<typeof postSendContactRoute> = async (c) => {
  throw new Error('Not implemented')
}
