import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVerifiedAccessInstancesRoute,
  postActionDescribeVerifiedAccessInstancesRoute,
} from '../routes'

export const getActionDescribeVerifiedAccessInstancesRouteHandler: RouteHandler<
  typeof getActionDescribeVerifiedAccessInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVerifiedAccessInstancesRouteHandler: RouteHandler<
  typeof postActionDescribeVerifiedAccessInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
