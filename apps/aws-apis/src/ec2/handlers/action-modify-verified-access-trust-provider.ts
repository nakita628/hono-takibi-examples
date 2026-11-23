import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVerifiedAccessTrustProviderRoute,
  postActionModifyVerifiedAccessTrustProviderRoute,
} from '../routes'

export const getActionModifyVerifiedAccessTrustProviderRouteHandler: RouteHandler<
  typeof getActionModifyVerifiedAccessTrustProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVerifiedAccessTrustProviderRouteHandler: RouteHandler<
  typeof postActionModifyVerifiedAccessTrustProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
