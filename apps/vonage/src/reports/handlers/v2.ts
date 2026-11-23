import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2ReportsReportIdRoute,
  getV2ReportsRecordsRoute,
  getV2ReportsReportIdRoute,
  getV2ReportsRoute,
  postV2ReportsRoute,
} from '../routes'

export const getV2ReportsRouteHandler: RouteHandler<typeof getV2ReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ReportsRouteHandler: RouteHandler<typeof postV2ReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ReportsRecordsRouteHandler: RouteHandler<
  typeof getV2ReportsRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2ReportsReportIdRouteHandler: RouteHandler<
  typeof deleteV2ReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ReportsReportIdRouteHandler: RouteHandler<
  typeof getV2ReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
