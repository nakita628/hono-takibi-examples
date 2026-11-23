import type { RouteHandler } from '@hono/zod-openapi'
import type { getRankingsRoute } from '../routes'

export const getRankingsRouteHandler: RouteHandler<typeof getRankingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
