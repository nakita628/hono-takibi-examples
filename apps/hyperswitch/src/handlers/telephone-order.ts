import type { RouteHandler } from '@hono/zod-openapi'
import type { postTelephoneOrderMerchantIdProviderRoute } from '../routes'

export const postTelephoneOrderMerchantIdProviderRouteHandler: RouteHandler<
  typeof postTelephoneOrderMerchantIdProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
