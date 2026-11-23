import type { RouteHandler } from '@hono/zod-openapi'
import type { getPromotionSummaryReportRoute } from '../routes'

export const getPromotionSummaryReportRouteHandler: RouteHandler<
  typeof getPromotionSummaryReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
