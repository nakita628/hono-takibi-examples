import type { RouteHandler } from '@hono/zod-openapi'
import type { getMarketsThisRoute } from '../routes'

export const getMarketsThisRouteHandler: RouteHandler<typeof getMarketsThisRoute> = async (c) => {
  throw new Error('Not implemented')
}
