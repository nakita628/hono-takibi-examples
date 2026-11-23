import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeStackResourceDriftsRoute,
  postActionDescribeStackResourceDriftsRoute,
} from '../routes'

export const getActionDescribeStackResourceDriftsRouteHandler: RouteHandler<
  typeof getActionDescribeStackResourceDriftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStackResourceDriftsRouteHandler: RouteHandler<
  typeof postActionDescribeStackResourceDriftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
