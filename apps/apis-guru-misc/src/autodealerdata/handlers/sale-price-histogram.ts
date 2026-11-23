import type { RouteHandler } from '@hono/zod-openapi'
import type { getSalePriceHistogramRoute } from '../routes'

export const getSalePriceHistogramRouteHandler: RouteHandler<
  typeof getSalePriceHistogramRoute
> = async (c) => {
  throw new Error('Not implemented')
}
