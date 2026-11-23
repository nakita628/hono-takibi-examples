import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecentBuildsRoute } from '../routes'

export const getRecentBuildsRouteHandler: RouteHandler<typeof getRecentBuildsRoute> = async (c) => {
  throw new Error('Not implemented')
}
