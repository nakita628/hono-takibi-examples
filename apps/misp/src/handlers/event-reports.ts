import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventReportsIndexRoute,
  getEventReportsViewEventReportIdRoute,
  postEventReportsAddEventIdRoute,
  postEventReportsDeleteEventReportIdHardDeleteRoute,
  postEventReportsDeleteEventReportIdRoute,
  postEventReportsEditEventReportIdRoute,
  postEventReportsImportReportFromUrlEventIdRoute,
  postEventReportsRestoreEventReportIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventReportsHandler = app
  .openapi(getEventReportsViewEventReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventReportsAddEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventReportsEditEventReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventReportsDeleteEventReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventReportsDeleteEventReportIdHardDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventReportsRestoreEventReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventReportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventReportsImportReportFromUrlEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
