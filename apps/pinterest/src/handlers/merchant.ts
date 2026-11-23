import type { RouteHandler } from '@hono/zod-openapi'
import type { getMerchantMerchantIdStatusRoute } from '../routes'

export const getMerchantMerchantIdStatusRouteHandler: RouteHandler<
  typeof getMerchantMerchantIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
