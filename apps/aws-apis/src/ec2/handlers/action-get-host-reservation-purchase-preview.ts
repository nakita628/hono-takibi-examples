import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetHostReservationPurchasePreviewRoute,
  postActionGetHostReservationPurchasePreviewRoute,
} from '../routes'

export const getActionGetHostReservationPurchasePreviewRouteHandler: RouteHandler<
  typeof getActionGetHostReservationPurchasePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetHostReservationPurchasePreviewRouteHandler: RouteHandler<
  typeof postActionGetHostReservationPurchasePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
