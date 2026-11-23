import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendDiceRoute } from '../routes'

export const postSendDiceRouteHandler: RouteHandler<typeof postSendDiceRoute> = async (c) => {
  throw new Error('Not implemented')
}
