import type { RouteHandler } from '@hono/zod-openapi'
import type { postMlDeliveryPredictionRoute } from '../routes'

export const postMlDeliveryPredictionRouteHandler: RouteHandler<
  typeof postMlDeliveryPredictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
