import type { RouteHandler } from '@hono/zod-openapi'
import type { getLogsSocketAppIdRoute } from '../routes'

export const getLogsSocketAppIdRouteHandler: RouteHandler<typeof getLogsSocketAppIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
