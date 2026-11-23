import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendCodeRoute } from '../routes'

export const postSendCodeRouteHandler: RouteHandler<typeof postSendCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
