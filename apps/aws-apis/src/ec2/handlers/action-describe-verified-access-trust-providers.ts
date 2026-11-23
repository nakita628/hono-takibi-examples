import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVerifiedAccessTrustProvidersRoute,
  postActionDescribeVerifiedAccessTrustProvidersRoute,
} from '../routes'

export const getActionDescribeVerifiedAccessTrustProvidersRouteHandler: RouteHandler<
  typeof getActionDescribeVerifiedAccessTrustProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVerifiedAccessTrustProvidersRouteHandler: RouteHandler<
  typeof postActionDescribeVerifiedAccessTrustProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
