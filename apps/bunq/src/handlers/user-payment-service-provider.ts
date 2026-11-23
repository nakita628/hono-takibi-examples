import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserPaymentServiceProviderItemIdRoute } from '../routes'

export const getUserPaymentServiceProviderItemIdRouteHandler: RouteHandler<
  typeof getUserPaymentServiceProviderItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
