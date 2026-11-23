import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEventReportsIndexRoute,
  getEventReportsViewEventReportIdRoute,
  postEventReportsAddEventIdRoute,
  postEventReportsDeleteEventReportIdHardDeleteRoute,
  postEventReportsDeleteEventReportIdRoute,
  postEventReportsEditEventReportIdRoute,
  postEventReportsImportReportFromUrlEventIdRoute,
  postEventReportsRestoreEventReportIdRoute,
} from '../routes'

export const getEventReportsViewEventReportIdRouteHandler: RouteHandler<
  typeof getEventReportsViewEventReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventReportsAddEventIdRouteHandler: RouteHandler<
  typeof postEventReportsAddEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventReportsEditEventReportIdRouteHandler: RouteHandler<
  typeof postEventReportsEditEventReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventReportsDeleteEventReportIdRouteHandler: RouteHandler<
  typeof postEventReportsDeleteEventReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventReportsDeleteEventReportIdHardDeleteRouteHandler: RouteHandler<
  typeof postEventReportsDeleteEventReportIdHardDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventReportsRestoreEventReportIdRouteHandler: RouteHandler<
  typeof postEventReportsRestoreEventReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventReportsIndexRouteHandler: RouteHandler<
  typeof getEventReportsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventReportsImportReportFromUrlEventIdRouteHandler: RouteHandler<
  typeof postEventReportsImportReportFromUrlEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
