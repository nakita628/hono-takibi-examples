import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribePoliciesRoute, postActionDescribePoliciesRoute } from '../routes'

export const getActionDescribePoliciesRouteHandler: RouteHandler<
  typeof getActionDescribePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribePoliciesRouteHandler: RouteHandler<
  typeof postActionDescribePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
