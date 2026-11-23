import type { RouteHandler } from '@hono/zod-openapi'
import type { getExplorerRoute } from '../routes'

export const getExplorerRouteHandler: RouteHandler<typeof getExplorerRoute> = async (c) => {
  throw new Error('Not implemented')
}
