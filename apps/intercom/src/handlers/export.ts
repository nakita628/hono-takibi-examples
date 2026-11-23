import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getExportContentDataJobIdentifierRoute,
  getExportReportingDataGetDatasetsRoute,
  getExportReportingDataJobIdentifierRoute,
  getExportWorkflowsIdRoute,
  postExportCancelJobIdentifierRoute,
  postExportContentDataRoute,
  postExportReportingDataEnqueueRoute,
} from '../routes'

export const postExportReportingDataEnqueueRouteHandler: RouteHandler<
  typeof postExportReportingDataEnqueueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExportReportingDataJobIdentifierRouteHandler: RouteHandler<
  typeof getExportReportingDataJobIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExportReportingDataGetDatasetsRouteHandler: RouteHandler<
  typeof getExportReportingDataGetDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postExportContentDataRouteHandler: RouteHandler<
  typeof postExportContentDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExportContentDataJobIdentifierRouteHandler: RouteHandler<
  typeof getExportContentDataJobIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postExportCancelJobIdentifierRouteHandler: RouteHandler<
  typeof postExportCancelJobIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExportWorkflowsIdRouteHandler: RouteHandler<
  typeof getExportWorkflowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
