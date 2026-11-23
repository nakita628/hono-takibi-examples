import type { RouteHandler } from '@hono/zod-openapi'
import type { postPositionEstimateRoute } from '../routes'

export const postPositionEstimateRouteHandler: RouteHandler<
  typeof postPositionEstimateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
