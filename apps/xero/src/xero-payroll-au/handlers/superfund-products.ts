import type { RouteHandler } from '@hono/zod-openapi'
import type { getSuperfundProductsRoute } from '../routes'

export const getSuperfundProductsRouteHandler: RouteHandler<
  typeof getSuperfundProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
