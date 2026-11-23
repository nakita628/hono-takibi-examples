import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeOptionGroupOptionsRoute,
  postActionDescribeOptionGroupOptionsRoute,
} from '../routes'

export const getActionDescribeOptionGroupOptionsRouteHandler: RouteHandler<
  typeof getActionDescribeOptionGroupOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeOptionGroupOptionsRouteHandler: RouteHandler<
  typeof postActionDescribeOptionGroupOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
