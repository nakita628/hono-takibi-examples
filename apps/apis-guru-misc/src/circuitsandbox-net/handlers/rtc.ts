import type { RouteHandler } from '@hono/zod-openapi'
import type { getRtcSessionsRoute } from '../routes'

export const getRtcSessionsRouteHandler: RouteHandler<typeof getRtcSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
