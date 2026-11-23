import type { RouteHandler } from '@hono/zod-openapi'
import type { getActivityLogsActivityIdRoute, getActivityLogsRoute } from '../routes'

export const getActivityLogsRouteHandler: RouteHandler<typeof getActivityLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getActivityLogsActivityIdRouteHandler: RouteHandler<
  typeof getActivityLogsActivityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
