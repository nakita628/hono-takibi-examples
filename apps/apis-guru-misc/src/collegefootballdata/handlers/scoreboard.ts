import type { RouteHandler } from '@hono/zod-openapi'
import type { getScoreboardRoute } from '../routes'

export const getScoreboardRouteHandler: RouteHandler<typeof getScoreboardRoute> = async (c) => {
  throw new Error('Not implemented')
}
