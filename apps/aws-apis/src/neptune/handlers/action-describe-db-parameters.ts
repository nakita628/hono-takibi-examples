import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBParametersRoute,
  postActionDescribeDBParametersRoute,
} from '../routes'

export const getActionDescribeDBParametersRouteHandler: RouteHandler<
  typeof getActionDescribeDBParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBParametersRouteHandler: RouteHandler<
  typeof postActionDescribeDBParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
