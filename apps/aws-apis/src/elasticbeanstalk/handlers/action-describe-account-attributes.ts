import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAccountAttributesRoute,
  postActionDescribeAccountAttributesRoute,
} from '../routes'

export const getActionDescribeAccountAttributesRouteHandler: RouteHandler<
  typeof getActionDescribeAccountAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAccountAttributesRouteHandler: RouteHandler<
  typeof postActionDescribeAccountAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
