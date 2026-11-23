import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionReportInstanceStatusRoute,
  postActionReportInstanceStatusRoute,
} from '../routes'

export const getActionReportInstanceStatusRouteHandler: RouteHandler<
  typeof getActionReportInstanceStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionReportInstanceStatusRouteHandler: RouteHandler<
  typeof postActionReportInstanceStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
