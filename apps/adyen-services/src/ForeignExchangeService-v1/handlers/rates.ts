import type { RouteHandler } from '@hono/zod-openapi'
import type { postRatesCalculateRoute } from '../routes'

export const postRatesCalculateRouteHandler: RouteHandler<typeof postRatesCalculateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
