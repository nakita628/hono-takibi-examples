import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetCredentialReportRoute,
  postActionGetCredentialReportRoute,
} from '../routes'

export const getActionGetCredentialReportRouteHandler: RouteHandler<
  typeof getActionGetCredentialReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetCredentialReportRouteHandler: RouteHandler<
  typeof postActionGetCredentialReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
