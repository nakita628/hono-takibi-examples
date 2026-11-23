import type { RouteHandler } from '@hono/zod-openapi'
import type { getSosBucketsUsageRoute } from '../routes'

export const getSosBucketsUsageRouteHandler: RouteHandler<typeof getSosBucketsUsageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
