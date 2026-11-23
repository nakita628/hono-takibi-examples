import type { RouteHandler } from '@hono/zod-openapi'
import type {
  patchUrbanDeliveryConfirmCarbonOffsetRoute,
  patchUrbanDeliveryConfirmPaymentRoute,
  patchUrbanDeliveryConfirmPlantingRoute,
  patchUrbanDeliveryConfirmTransactionRoute,
  postUrbanDeliveryRoute,
} from '../routes'

export const postUrbanDeliveryRouteHandler: RouteHandler<typeof postUrbanDeliveryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchUrbanDeliveryConfirmCarbonOffsetRouteHandler: RouteHandler<
  typeof patchUrbanDeliveryConfirmCarbonOffsetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUrbanDeliveryConfirmPaymentRouteHandler: RouteHandler<
  typeof patchUrbanDeliveryConfirmPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUrbanDeliveryConfirmPlantingRouteHandler: RouteHandler<
  typeof patchUrbanDeliveryConfirmPlantingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUrbanDeliveryConfirmTransactionRouteHandler: RouteHandler<
  typeof patchUrbanDeliveryConfirmTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
