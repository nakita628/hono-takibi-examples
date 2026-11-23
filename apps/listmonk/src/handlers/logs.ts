import type { RouteHandler } from '@hono/zod-openapi'
import type { getLogsRoute } from '../routes'

export const getLogsRouteHandler: RouteHandler<typeof getLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}
