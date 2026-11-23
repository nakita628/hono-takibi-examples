import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeUpdateActionsRoute,
  postActionDescribeUpdateActionsRoute,
} from '../routes'

export const getActionDescribeUpdateActionsRouteHandler: RouteHandler<
  typeof getActionDescribeUpdateActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeUpdateActionsRouteHandler: RouteHandler<
  typeof postActionDescribeUpdateActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
