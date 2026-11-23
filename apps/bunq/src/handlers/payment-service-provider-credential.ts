import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentServiceProviderCredentialItemIdRoute,
  postPaymentServiceProviderCredentialRoute,
} from '../routes'

export const getPaymentServiceProviderCredentialItemIdRouteHandler: RouteHandler<
  typeof getPaymentServiceProviderCredentialItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentServiceProviderCredentialRouteHandler: RouteHandler<
  typeof postPaymentServiceProviderCredentialRoute
> = async (c) => {
  throw new Error('Not implemented')
}
