import type { RouteHandler } from '@hono/zod-openapi'
import type { getNodesRoute } from '../routes'

export const getNodesRouteHandler: RouteHandler<typeof getNodesRoute> = async (c) => {
  throw new Error('Not implemented')
}
