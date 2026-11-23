import type { RouteHandler } from '@hono/zod-openapi'
import type { getSimilarSalePriceRoute } from '../routes'

export const getSimilarSalePriceRouteHandler: RouteHandler<
  typeof getSimilarSalePriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
