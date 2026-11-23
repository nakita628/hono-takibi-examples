import type { RouteHandler } from '@hono/zod-openapi'
import type { postMerchantCancellationRoute } from '../routes'

export const postMerchantCancellationRouteHandler: RouteHandler<
  typeof postMerchantCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
