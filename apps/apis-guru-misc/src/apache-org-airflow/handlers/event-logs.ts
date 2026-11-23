import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventLogsEventLogIdRoute, getEventLogsRoute } from '../routes'

export const getEventLogsRouteHandler: RouteHandler<typeof getEventLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventLogsEventLogIdRouteHandler: RouteHandler<
  typeof getEventLogsEventLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
