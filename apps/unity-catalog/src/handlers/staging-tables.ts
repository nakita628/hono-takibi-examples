import type { RouteHandler } from '@hono/zod-openapi'
import type { postStagingTablesRoute } from '../routes'

export const postStagingTablesRouteHandler: RouteHandler<typeof postStagingTablesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
