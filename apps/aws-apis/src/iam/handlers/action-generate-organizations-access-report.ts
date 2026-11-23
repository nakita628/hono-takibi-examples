import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGenerateOrganizationsAccessReportRoute,
  postActionGenerateOrganizationsAccessReportRoute,
} from '../routes'

export const getActionGenerateOrganizationsAccessReportRouteHandler: RouteHandler<
  typeof getActionGenerateOrganizationsAccessReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGenerateOrganizationsAccessReportRouteHandler: RouteHandler<
  typeof postActionGenerateOrganizationsAccessReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
