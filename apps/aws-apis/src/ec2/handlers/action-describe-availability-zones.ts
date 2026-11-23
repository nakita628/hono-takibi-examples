import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAvailabilityZonesRoute,
  postActionDescribeAvailabilityZonesRoute,
} from '../routes'

export const getActionDescribeAvailabilityZonesRouteHandler: RouteHandler<
  typeof getActionDescribeAvailabilityZonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAvailabilityZonesRouteHandler: RouteHandler<
  typeof postActionDescribeAvailabilityZonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
