import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpcAttributeRoute,
  postActionDescribeVpcAttributeRoute,
} from '../routes'

export const getActionDescribeVpcAttributeRouteHandler: RouteHandler<
  typeof getActionDescribeVpcAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpcAttributeRouteHandler: RouteHandler<
  typeof postActionDescribeVpcAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
