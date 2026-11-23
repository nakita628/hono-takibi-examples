import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetGameScoreRoute } from '../routes'

export const postSetGameScoreRouteHandler: RouteHandler<typeof postSetGameScoreRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
