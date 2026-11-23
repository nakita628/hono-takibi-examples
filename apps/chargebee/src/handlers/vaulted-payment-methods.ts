import type { RouteHandler } from '@hono/zod-openapi'
import type { getVaultedPaymentMethodsVaultedPaymentMethodIdRoute } from '../routes'

export const getVaultedPaymentMethodsVaultedPaymentMethodIdRouteHandler: RouteHandler<
  typeof getVaultedPaymentMethodsVaultedPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
