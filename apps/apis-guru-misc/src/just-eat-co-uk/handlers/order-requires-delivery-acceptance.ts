import type { RouteHandler } from '@hono/zod-openapi'
import type { putOrderRequiresDeliveryAcceptanceRoute } from '../routes'

export const putOrderRequiresDeliveryAcceptanceRouteHandler: RouteHandler<
  typeof putOrderRequiresDeliveryAcceptanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
