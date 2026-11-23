import type { RouteHandler } from '@hono/zod-openapi'
import type { getHeartbeatRoute } from '../routes'

export const getHeartbeatRouteHandler: RouteHandler<typeof getHeartbeatRoute> = async (c) => {
  throw new Error('Not implemented')
}
