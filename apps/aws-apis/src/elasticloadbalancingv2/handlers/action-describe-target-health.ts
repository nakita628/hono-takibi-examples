import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTargetHealthRoute,
  postActionDescribeTargetHealthRoute,
} from '../routes'

export const getActionDescribeTargetHealthRouteHandler: RouteHandler<
  typeof getActionDescribeTargetHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTargetHealthRouteHandler: RouteHandler<
  typeof postActionDescribeTargetHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
