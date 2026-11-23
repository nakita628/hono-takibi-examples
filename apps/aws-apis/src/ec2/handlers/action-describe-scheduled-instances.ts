import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeScheduledInstancesRoute,
  postActionDescribeScheduledInstancesRoute,
} from '../routes'

export const getActionDescribeScheduledInstancesRouteHandler: RouteHandler<
  typeof getActionDescribeScheduledInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeScheduledInstancesRouteHandler: RouteHandler<
  typeof postActionDescribeScheduledInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
