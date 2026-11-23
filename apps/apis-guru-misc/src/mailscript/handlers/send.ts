import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendRoute } from '../routes'

export const postSendRouteHandler: RouteHandler<typeof postSendRoute> = async (c) => {
  throw new Error('Not implemented')
}
