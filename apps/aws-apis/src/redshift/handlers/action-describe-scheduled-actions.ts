import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeScheduledActionsRoute,
  postActionDescribeScheduledActionsRoute,
} from '../routes'

export const getActionDescribeScheduledActionsRouteHandler: RouteHandler<
  typeof getActionDescribeScheduledActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeScheduledActionsRouteHandler: RouteHandler<
  typeof postActionDescribeScheduledActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
