import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSourceRegionsRoute,
  postActionDescribeSourceRegionsRoute,
} from '../routes'

export const getActionDescribeSourceRegionsRouteHandler: RouteHandler<
  typeof getActionDescribeSourceRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSourceRegionsRouteHandler: RouteHandler<
  typeof postActionDescribeSourceRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
