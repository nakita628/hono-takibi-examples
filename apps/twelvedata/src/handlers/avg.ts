import type { RouteHandler } from '@hono/zod-openapi'
import type { getAvgRoute } from '../routes'

export const getAvgRouteHandler: RouteHandler<typeof getAvgRoute> = async (c) => {
  throw new Error('Not implemented')
}
