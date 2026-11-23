import type { RouteHandler } from '@hono/zod-openapi'
import type { postPurchasesEstimateRoute, postPurchasesRoute } from '../routes'

export const postPurchasesRouteHandler: RouteHandler<typeof postPurchasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPurchasesEstimateRouteHandler: RouteHandler<
  typeof postPurchasesEstimateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
