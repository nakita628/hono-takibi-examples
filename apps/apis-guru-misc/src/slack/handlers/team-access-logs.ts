import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamAccessLogsRoute } from '../routes'

export const getTeamAccessLogsRouteHandler: RouteHandler<typeof getTeamAccessLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
