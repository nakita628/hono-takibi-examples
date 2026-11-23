import type { RouteHandler } from '@hono/zod-openapi'
import type { getReportingDatesIndexRoute } from '../routes'

export const getReportingDatesIndexRouteHandler: RouteHandler<
  typeof getReportingDatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
