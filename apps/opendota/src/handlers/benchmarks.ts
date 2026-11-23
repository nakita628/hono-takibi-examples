import type { RouteHandler } from '@hono/zod-openapi'
import type { getBenchmarksRoute } from '../routes'

export const getBenchmarksRouteHandler: RouteHandler<typeof getBenchmarksRoute> = async (c) => {
  throw new Error('Not implemented')
}
