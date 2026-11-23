import type { RouteHandler } from '@hono/zod-openapi'
import type { getHistoryExportResultsRoute } from '../routes'

export const getHistoryExportResultsRouteHandler: RouteHandler<
  typeof getHistoryExportResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
