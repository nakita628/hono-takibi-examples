import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEngineDefaultClusterParametersRoute,
  postActionDescribeEngineDefaultClusterParametersRoute,
} from '../routes'

export const getActionDescribeEngineDefaultClusterParametersRouteHandler: RouteHandler<
  typeof getActionDescribeEngineDefaultClusterParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEngineDefaultClusterParametersRouteHandler: RouteHandler<
  typeof postActionDescribeEngineDefaultClusterParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
