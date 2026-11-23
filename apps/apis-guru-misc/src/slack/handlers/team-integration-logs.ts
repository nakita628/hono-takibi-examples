import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamIntegrationLogsRoute } from '../routes'

export const getTeamIntegrationLogsRouteHandler: RouteHandler<
  typeof getTeamIntegrationLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
