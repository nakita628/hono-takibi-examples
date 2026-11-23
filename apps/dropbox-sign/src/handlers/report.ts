import type { RouteHandler } from '@hono/zod-openapi'
import type { postReportCreateRoute } from '../routes'

export const postReportCreateRouteHandler: RouteHandler<typeof postReportCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
