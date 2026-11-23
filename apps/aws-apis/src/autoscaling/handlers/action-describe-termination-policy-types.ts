import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTerminationPolicyTypesRoute,
  postActionDescribeTerminationPolicyTypesRoute,
} from '../routes'

export const getActionDescribeTerminationPolicyTypesRouteHandler: RouteHandler<
  typeof getActionDescribeTerminationPolicyTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTerminationPolicyTypesRouteHandler: RouteHandler<
  typeof postActionDescribeTerminationPolicyTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
