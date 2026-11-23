import type { RouteHandler } from '@hono/zod-openapi'
import type { getPromotionReportRoute } from '../routes'

export const getPromotionReportRouteHandler: RouteHandler<typeof getPromotionReportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
