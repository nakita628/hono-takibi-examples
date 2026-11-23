import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetOrganizationsAccessReportRoute,
  postActionGetOrganizationsAccessReportRoute,
} from '../routes'

export const getActionGetOrganizationsAccessReportRouteHandler: RouteHandler<
  typeof getActionGetOrganizationsAccessReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetOrganizationsAccessReportRouteHandler: RouteHandler<
  typeof postActionGetOrganizationsAccessReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
