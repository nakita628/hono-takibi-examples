import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsageReportRoute } from '../routes'

export const getUsageReportRouteHandler: RouteHandler<typeof getUsageReportRoute> = async (c) => {
  throw new Error('Not implemented')
}
