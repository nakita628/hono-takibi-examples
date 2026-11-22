import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiKeysMerchantIdKeyIdRoute,
  getApiKeysMerchantIdKeyIdRoute,
  getApiKeysMerchantIdListRoute,
  postApiKeysMerchantIdKeyIdRoute,
  postApiKeysMerchantIdRoute,
} from '../routes'

export const postApiKeysMerchantIdRouteHandler: RouteHandler<
  typeof postApiKeysMerchantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysMerchantIdKeyIdRouteHandler: RouteHandler<
  typeof getApiKeysMerchantIdKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysMerchantIdKeyIdRouteHandler: RouteHandler<
  typeof postApiKeysMerchantIdKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeysMerchantIdKeyIdRouteHandler: RouteHandler<
  typeof deleteApiKeysMerchantIdKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysMerchantIdListRouteHandler: RouteHandler<
  typeof getApiKeysMerchantIdListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
