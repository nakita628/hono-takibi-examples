import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeOrganizationsAccessRoute,
  postActionDescribeOrganizationsAccessRoute,
} from '../routes'

export const getActionDescribeOrganizationsAccessRouteHandler: RouteHandler<
  typeof getActionDescribeOrganizationsAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeOrganizationsAccessRouteHandler: RouteHandler<
  typeof postActionDescribeOrganizationsAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
