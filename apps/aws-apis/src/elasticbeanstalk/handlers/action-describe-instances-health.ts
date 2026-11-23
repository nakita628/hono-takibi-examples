import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInstancesHealthRoute,
  postActionDescribeInstancesHealthRoute,
} from '../routes'

export const getActionDescribeInstancesHealthRouteHandler: RouteHandler<
  typeof getActionDescribeInstancesHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstancesHealthRouteHandler: RouteHandler<
  typeof postActionDescribeInstancesHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
