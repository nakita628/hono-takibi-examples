import type { RouteHandler } from '@hono/zod-openapi'
import type {
  patchAirtravelCoordinatesConfirmCarbonOffsetRoute,
  patchAirtravelCoordinatesConfirmPaymentRoute,
  patchAirtravelCoordinatesConfirmPlantingRoute,
  patchAirtravelCoordinatesConfirmTransactionRoute,
  postAirtravelCoordinatesRoute,
} from '../routes'

export const postAirtravelCoordinatesRouteHandler: RouteHandler<
  typeof postAirtravelCoordinatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAirtravelCoordinatesConfirmCarbonOffsetRouteHandler: RouteHandler<
  typeof patchAirtravelCoordinatesConfirmCarbonOffsetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAirtravelCoordinatesConfirmPaymentRouteHandler: RouteHandler<
  typeof patchAirtravelCoordinatesConfirmPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAirtravelCoordinatesConfirmPlantingRouteHandler: RouteHandler<
  typeof patchAirtravelCoordinatesConfirmPlantingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAirtravelCoordinatesConfirmTransactionRouteHandler: RouteHandler<
  typeof patchAirtravelCoordinatesConfirmTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
