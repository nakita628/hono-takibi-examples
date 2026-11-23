import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbNodesRoute } from '../routes'

export const getDbNodesRouteHandler: RouteHandler<typeof getDbNodesRoute> = async (c) => {
  throw new Error('Not implemented')
}
