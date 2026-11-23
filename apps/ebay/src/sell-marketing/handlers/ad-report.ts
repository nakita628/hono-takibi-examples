import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdReportReportIdRoute } from '../routes'

export const getAdReportReportIdRouteHandler: RouteHandler<
  typeof getAdReportReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
