import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionNotificationExportResultsRoute } from '../routes'

export const getActionNotificationExportResultsRouteHandler: RouteHandler<
  typeof getActionNotificationExportResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
