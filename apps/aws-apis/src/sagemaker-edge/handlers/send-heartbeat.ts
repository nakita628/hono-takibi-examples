import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendHeartbeatRoute } from '../routes'

export const postSendHeartbeatRouteHandler: RouteHandler<typeof postSendHeartbeatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
