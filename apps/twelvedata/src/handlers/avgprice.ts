import type { RouteHandler } from '@hono/zod-openapi'
import type { getAvgpriceRoute } from '../routes'

export const getAvgpriceRouteHandler: RouteHandler<typeof getAvgpriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
