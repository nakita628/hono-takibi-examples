import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderPreestimateShippingListJsonRoute } from '../routes'

export const postOrderPreestimateShippingListJsonRouteHandler: RouteHandler<
  typeof postOrderPreestimateShippingListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
