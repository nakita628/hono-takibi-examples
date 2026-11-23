import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeStackEventsRoute,
  postActionDescribeStackEventsRoute,
} from '../routes'

export const getActionDescribeStackEventsRouteHandler: RouteHandler<
  typeof getActionDescribeStackEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStackEventsRouteHandler: RouteHandler<
  typeof postActionDescribeStackEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
