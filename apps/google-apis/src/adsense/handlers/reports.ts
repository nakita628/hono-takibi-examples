import type { RouteHandler } from '@hono/zod-openapi'
import type { getReportsRoute, getReportsSavedReportIdRoute, getReportsSavedRoute } from '../routes'

export const getReportsRouteHandler: RouteHandler<typeof getReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSavedRouteHandler: RouteHandler<typeof getReportsSavedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSavedReportIdRouteHandler: RouteHandler<
  typeof getReportsSavedReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
