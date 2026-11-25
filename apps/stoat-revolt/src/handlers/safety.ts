import type { RouteHandler } from '@hono/zod-openapi'
import type { postSafetyReportRoute } from '../routes'

export const postSafetyReportRouteHandler: RouteHandler<typeof postSafetyReportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
