import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeScheduledInstanceAvailabilityRoute,
  postActionDescribeScheduledInstanceAvailabilityRoute,
} from '../routes'

export const getActionDescribeScheduledInstanceAvailabilityRouteHandler: RouteHandler<
  typeof getActionDescribeScheduledInstanceAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeScheduledInstanceAvailabilityRouteHandler: RouteHandler<
  typeof postActionDescribeScheduledInstanceAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
