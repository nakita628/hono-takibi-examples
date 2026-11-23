import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppIdLogsRoute } from '../routes'

export const getAppIdLogsRouteHandler: RouteHandler<typeof getAppIdLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}
