import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTypeRegistrationRoute,
  postActionDescribeTypeRegistrationRoute,
} from '../routes'

export const getActionDescribeTypeRegistrationRouteHandler: RouteHandler<
  typeof getActionDescribeTypeRegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTypeRegistrationRouteHandler: RouteHandler<
  typeof postActionDescribeTypeRegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
