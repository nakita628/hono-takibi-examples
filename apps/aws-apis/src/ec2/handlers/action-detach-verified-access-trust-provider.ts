import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDetachVerifiedAccessTrustProviderRoute,
  postActionDetachVerifiedAccessTrustProviderRoute,
} from '../routes'

export const getActionDetachVerifiedAccessTrustProviderRouteHandler: RouteHandler<
  typeof getActionDetachVerifiedAccessTrustProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachVerifiedAccessTrustProviderRouteHandler: RouteHandler<
  typeof postActionDetachVerifiedAccessTrustProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
