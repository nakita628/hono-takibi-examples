import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReportsReportIdRoute,
  getReportsReportIdResultCsvRoute,
  getReportsReportIdResultPrinterFriendlyRoute,
  postReportsExportXmlRoute,
  postReportsImportXmlRoute,
  postReportsReportIdDuplicateRoute,
  putReportsReportIdPreferredRoute,
} from '../routes'

export const postReportsExportXmlRouteHandler: RouteHandler<
  typeof postReportsExportXmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsImportXmlRouteHandler: RouteHandler<
  typeof postReportsImportXmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsReportIdRouteHandler: RouteHandler<
  typeof deleteReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsReportIdDuplicateRouteHandler: RouteHandler<
  typeof postReportsReportIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReportsReportIdPreferredRouteHandler: RouteHandler<
  typeof putReportsReportIdPreferredRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsReportIdResultCsvRouteHandler: RouteHandler<
  typeof getReportsReportIdResultCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsReportIdResultPrinterFriendlyRouteHandler: RouteHandler<
  typeof getReportsReportIdResultPrinterFriendlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
