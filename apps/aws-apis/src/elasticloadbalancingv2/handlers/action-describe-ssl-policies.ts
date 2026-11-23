import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSSLPoliciesRoute,
  postActionDescribeSSLPoliciesRoute,
} from '../routes'

export const getActionDescribeSSLPoliciesRouteHandler: RouteHandler<
  typeof getActionDescribeSSLPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSSLPoliciesRouteHandler: RouteHandler<
  typeof postActionDescribeSSLPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
