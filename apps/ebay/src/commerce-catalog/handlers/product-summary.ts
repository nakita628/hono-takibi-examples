import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductSummarySearchRoute } from '../routes'

export const getProductSummarySearchRouteHandler: RouteHandler<
  typeof getProductSummarySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
