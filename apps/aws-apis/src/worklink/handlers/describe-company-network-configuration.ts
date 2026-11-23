import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeCompanyNetworkConfigurationRoute } from '../routes'

export const postDescribeCompanyNetworkConfigurationRouteHandler: RouteHandler<
  typeof postDescribeCompanyNetworkConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
