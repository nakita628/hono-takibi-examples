import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClusterTracksRoute,
  postActionDescribeClusterTracksRoute,
} from '../routes'

export const getActionDescribeClusterTracksRouteHandler: RouteHandler<
  typeof getActionDescribeClusterTracksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClusterTracksRouteHandler: RouteHandler<
  typeof postActionDescribeClusterTracksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
