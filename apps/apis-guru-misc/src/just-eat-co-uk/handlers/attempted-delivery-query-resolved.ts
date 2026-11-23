import type { RouteHandler } from '@hono/zod-openapi'
import type { putAttemptedDeliveryQueryResolvedRoute } from '../routes'

export const putAttemptedDeliveryQueryResolvedRouteHandler: RouteHandler<
  typeof putAttemptedDeliveryQueryResolvedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
