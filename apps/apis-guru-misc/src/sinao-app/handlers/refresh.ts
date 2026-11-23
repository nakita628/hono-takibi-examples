import type { RouteHandler } from '@hono/zod-openapi'
import type { getRefreshRoute } from '../routes'

export const getRefreshRouteHandler: RouteHandler<typeof getRefreshRoute> = async (c) => {
  throw new Error('Not implemented')
}
