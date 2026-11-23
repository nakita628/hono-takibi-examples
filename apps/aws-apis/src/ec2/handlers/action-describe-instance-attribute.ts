import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInstanceAttributeRoute,
  postActionDescribeInstanceAttributeRoute,
} from '../routes'

export const getActionDescribeInstanceAttributeRouteHandler: RouteHandler<
  typeof getActionDescribeInstanceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstanceAttributeRouteHandler: RouteHandler<
  typeof postActionDescribeInstanceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
