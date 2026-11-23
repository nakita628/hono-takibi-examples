import type { RouteHandler } from '@hono/zod-openapi'
import type { getLogsLogIdRoute, getLogsRoute } from '../routes'

export const getLogsRouteHandler: RouteHandler<typeof getLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsLogIdRouteHandler: RouteHandler<typeof getLogsLogIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
