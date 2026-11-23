import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAvailabilityOptionsRoute,
  postActionDescribeAvailabilityOptionsRoute,
} from '../routes'

export const getActionDescribeAvailabilityOptionsRouteHandler: RouteHandler<
  typeof getActionDescribeAvailabilityOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAvailabilityOptionsRouteHandler: RouteHandler<
  typeof postActionDescribeAvailabilityOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
