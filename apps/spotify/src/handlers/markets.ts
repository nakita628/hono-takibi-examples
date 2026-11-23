import type { RouteHandler } from '@hono/zod-openapi'
import type { getMarketsRoute } from '../routes'

export const getMarketsRouteHandler: RouteHandler<typeof getMarketsRoute> = async (c) => {
  throw new Error('Not implemented')
}
