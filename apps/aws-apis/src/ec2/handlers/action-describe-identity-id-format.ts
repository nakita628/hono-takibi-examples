import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeIdentityIdFormatRoute,
  postActionDescribeIdentityIdFormatRoute,
} from '../routes'

export const getActionDescribeIdentityIdFormatRouteHandler: RouteHandler<
  typeof getActionDescribeIdentityIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeIdentityIdFormatRouteHandler: RouteHandler<
  typeof postActionDescribeIdentityIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
