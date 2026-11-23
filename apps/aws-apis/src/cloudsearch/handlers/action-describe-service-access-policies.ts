import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeServiceAccessPoliciesRoute,
  postActionDescribeServiceAccessPoliciesRoute,
} from '../routes'

export const getActionDescribeServiceAccessPoliciesRouteHandler: RouteHandler<
  typeof getActionDescribeServiceAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeServiceAccessPoliciesRouteHandler: RouteHandler<
  typeof postActionDescribeServiceAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
