import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReportsReportIdDownloadUrlRoute,
  getReportsReportIdRoute,
  getReportsRoute,
  postReportsRoute,
} from '../routes'

export const getReportsRouteHandler: RouteHandler<typeof getReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsRouteHandler: RouteHandler<typeof postReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsReportIdRouteHandler: RouteHandler<typeof getReportsReportIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReportsReportIdDownloadUrlRouteHandler: RouteHandler<
  typeof getReportsReportIdDownloadUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}
