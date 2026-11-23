import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteVerifiedAccessTrustProviderRoute,
  postActionDeleteVerifiedAccessTrustProviderRoute,
} from '../routes'

export const getActionDeleteVerifiedAccessTrustProviderRouteHandler: RouteHandler<
  typeof getActionDeleteVerifiedAccessTrustProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVerifiedAccessTrustProviderRouteHandler: RouteHandler<
  typeof postActionDeleteVerifiedAccessTrustProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
