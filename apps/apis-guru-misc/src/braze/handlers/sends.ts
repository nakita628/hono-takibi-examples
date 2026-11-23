import type { RouteHandler } from '@hono/zod-openapi'
import type { getSendsDataSeriesRoute } from '../routes'

export const getSendsDataSeriesRouteHandler: RouteHandler<typeof getSendsDataSeriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
