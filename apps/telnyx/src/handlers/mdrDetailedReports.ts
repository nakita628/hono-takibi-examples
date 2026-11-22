import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegacyReportingBatchDetailRecordsMessagingId2Route,
  deleteLegacyReportingBatchDetailRecordsMessagingIdRoute,
  getLegacyReportingBatchDetailRecordsMessaging2Route,
  getLegacyReportingBatchDetailRecordsMessagingId2Route,
  getLegacyReportingBatchDetailRecordsMessagingIdRoute,
  getLegacyReportingBatchDetailRecordsMessagingRoute,
  postLegacyReportingBatchDetailRecordsMessaging2Route,
  postLegacyReportingBatchDetailRecordsMessagingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mdrDetailedReportsHandler = app
  .openapi(getLegacyReportingBatchDetailRecordsMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingBatchDetailRecordsMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingBatchDetailRecordsMessagingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsMessagingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsMessaging2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingBatchDetailRecordsMessaging2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingBatchDetailRecordsMessagingId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsMessagingId2Route, (c) => {
    throw new Error('Not implemented')
  })
