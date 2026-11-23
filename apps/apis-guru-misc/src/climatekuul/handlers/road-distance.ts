import type { RouteHandler } from '@hono/zod-openapi'
import type {
  patchRoadDistanceConfirmCarbonOffsetRoute,
  patchRoadDistanceConfirmPaymentRoute,
  patchRoadDistanceConfirmPlantingRoute,
  patchRoadDistanceConfirmTransactionRoute,
  postRoadDistanceRoute,
} from '../routes'

export const postRoadDistanceRouteHandler: RouteHandler<typeof postRoadDistanceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchRoadDistanceConfirmCarbonOffsetRouteHandler: RouteHandler<
  typeof patchRoadDistanceConfirmCarbonOffsetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRoadDistanceConfirmPaymentRouteHandler: RouteHandler<
  typeof patchRoadDistanceConfirmPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRoadDistanceConfirmPlantingRouteHandler: RouteHandler<
  typeof patchRoadDistanceConfirmPlantingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRoadDistanceConfirmTransactionRouteHandler: RouteHandler<
  typeof patchRoadDistanceConfirmTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
