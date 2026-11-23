import type { RouteHandler } from '@hono/zod-openapi'
import type { getRocRoute } from '../routes'

export const getRocRouteHandler: RouteHandler<typeof getRocRoute> = async (c) => {
  throw new Error('Not implemented')
}
