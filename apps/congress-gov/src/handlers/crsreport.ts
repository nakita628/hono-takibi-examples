import type { RouteHandler } from '@hono/zod-openapi'
import type { getCrsreportReportNumberRoute, getCrsreportRoute } from '../routes'

export const getCrsreportRouteHandler: RouteHandler<typeof getCrsreportRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCrsreportReportNumberRouteHandler: RouteHandler<
  typeof getCrsreportReportNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
