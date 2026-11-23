import type { RouteHandler } from '@hono/zod-openapi'
import type { getRegionSalesRoute } from '../routes'

export const getRegionSalesRouteHandler: RouteHandler<typeof getRegionSalesRoute> = async (c) => {
  throw new Error('Not implemented')
}
