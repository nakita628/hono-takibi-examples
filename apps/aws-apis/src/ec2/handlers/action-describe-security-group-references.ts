import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSecurityGroupReferencesRoute,
  postActionDescribeSecurityGroupReferencesRoute,
} from '../routes'

export const getActionDescribeSecurityGroupReferencesRouteHandler: RouteHandler<
  typeof getActionDescribeSecurityGroupReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSecurityGroupReferencesRouteHandler: RouteHandler<
  typeof postActionDescribeSecurityGroupReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
