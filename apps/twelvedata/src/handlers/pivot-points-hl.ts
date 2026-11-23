import type { RouteHandler } from '@hono/zod-openapi'
import type { getPivotPointsHlRoute } from '../routes'

export const getPivotPointsHlRouteHandler: RouteHandler<typeof getPivotPointsHlRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
