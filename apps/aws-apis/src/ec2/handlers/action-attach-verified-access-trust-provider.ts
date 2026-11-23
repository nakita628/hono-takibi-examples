import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAttachVerifiedAccessTrustProviderRoute,
  postActionAttachVerifiedAccessTrustProviderRoute,
} from '../routes'

export const getActionAttachVerifiedAccessTrustProviderRouteHandler: RouteHandler<
  typeof getActionAttachVerifiedAccessTrustProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachVerifiedAccessTrustProviderRouteHandler: RouteHandler<
  typeof postActionAttachVerifiedAccessTrustProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
