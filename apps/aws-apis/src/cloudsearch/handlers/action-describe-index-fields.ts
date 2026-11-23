import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeIndexFieldsRoute,
  postActionDescribeIndexFieldsRoute,
} from '../routes'

export const getActionDescribeIndexFieldsRouteHandler: RouteHandler<
  typeof getActionDescribeIndexFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeIndexFieldsRouteHandler: RouteHandler<
  typeof postActionDescribeIndexFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
