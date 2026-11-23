import type { RouteHandler } from '@hono/zod-openapi'
import type { getConsolidatedReportFormatRoute } from '../routes'

export const getConsolidatedReportFormatRouteHandler: RouteHandler<
  typeof getConsolidatedReportFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
