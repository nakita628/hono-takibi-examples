import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdReportTaskReportTaskIdRoute,
  getAdReportTaskReportTaskIdRoute,
  getAdReportTaskRoute,
  postAdReportTaskRoute,
} from '../routes'

export const getAdReportTaskRouteHandler: RouteHandler<typeof getAdReportTaskRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdReportTaskRouteHandler: RouteHandler<typeof postAdReportTaskRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAdReportTaskReportTaskIdRouteHandler: RouteHandler<
  typeof deleteAdReportTaskReportTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdReportTaskReportTaskIdRouteHandler: RouteHandler<
  typeof getAdReportTaskReportTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
