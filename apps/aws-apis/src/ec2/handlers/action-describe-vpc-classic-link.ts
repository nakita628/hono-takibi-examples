import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpcClassicLinkRoute,
  postActionDescribeVpcClassicLinkRoute,
} from '../routes'

export const getActionDescribeVpcClassicLinkRouteHandler: RouteHandler<
  typeof getActionDescribeVpcClassicLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpcClassicLinkRouteHandler: RouteHandler<
  typeof postActionDescribeVpcClassicLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
