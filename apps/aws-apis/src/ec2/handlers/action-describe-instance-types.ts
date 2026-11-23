import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInstanceTypesRoute,
  postActionDescribeInstanceTypesRoute,
} from '../routes'

export const getActionDescribeInstanceTypesRouteHandler: RouteHandler<
  typeof getActionDescribeInstanceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstanceTypesRouteHandler: RouteHandler<
  typeof postActionDescribeInstanceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
