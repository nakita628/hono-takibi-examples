import type { RouteHandler } from '@hono/zod-openapi'
import type { getLogsServiceRoute } from '../routes'

export const getLogsServiceRouteHandler: RouteHandler<typeof getLogsServiceRoute> = async (c) => {
  throw new Error('Not implemented')
}
