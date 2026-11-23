import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInstanceHealthRoute,
  postActionDescribeInstanceHealthRoute,
} from '../routes'

export const getActionDescribeInstanceHealthRouteHandler: RouteHandler<
  typeof getActionDescribeInstanceHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstanceHealthRouteHandler: RouteHandler<
  typeof postActionDescribeInstanceHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
