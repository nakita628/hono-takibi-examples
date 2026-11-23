import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrafficReportRoute } from '../routes'

export const getTrafficReportRouteHandler: RouteHandler<typeof getTrafficReportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
