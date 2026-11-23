import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShuttleReportsRoute,
  getShuttleReportsShuttleReportIdRoute,
  postShuttleReportsRoute,
} from '../routes'

export const getShuttleReportsRouteHandler: RouteHandler<typeof getShuttleReportsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postShuttleReportsRouteHandler: RouteHandler<typeof postShuttleReportsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getShuttleReportsShuttleReportIdRouteHandler: RouteHandler<
  typeof getShuttleReportsShuttleReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
