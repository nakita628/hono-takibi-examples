import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateVerifiedAccessTrustProviderRoute,
  postActionCreateVerifiedAccessTrustProviderRoute,
} from '../routes'

export const getActionCreateVerifiedAccessTrustProviderRouteHandler: RouteHandler<
  typeof getActionCreateVerifiedAccessTrustProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVerifiedAccessTrustProviderRouteHandler: RouteHandler<
  typeof postActionCreateVerifiedAccessTrustProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
