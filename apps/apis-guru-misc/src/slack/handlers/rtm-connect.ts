import type { RouteHandler } from '@hono/zod-openapi'
import type { getRtmConnectRoute } from '../routes'

export const getRtmConnectRouteHandler: RouteHandler<typeof getRtmConnectRoute> = async (c) => {
  throw new Error('Not implemented')
}
