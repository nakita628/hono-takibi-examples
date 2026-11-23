import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDefaultClusterParametersRoute,
  postActionDescribeDefaultClusterParametersRoute,
} from '../routes'

export const getActionDescribeDefaultClusterParametersRouteHandler: RouteHandler<
  typeof getActionDescribeDefaultClusterParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDefaultClusterParametersRouteHandler: RouteHandler<
  typeof postActionDescribeDefaultClusterParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
