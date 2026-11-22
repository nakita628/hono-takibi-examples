import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegacyReportingUsageReportsMessagingId2Route,
  deleteLegacyReportingUsageReportsMessagingIdRoute,
  deleteReportsMdrUsageReportsIdRoute,
  getLegacyReportingUsageReportsMessaging2Route,
  getLegacyReportingUsageReportsMessagingId2Route,
  getLegacyReportingUsageReportsMessagingIdRoute,
  getLegacyReportingUsageReportsMessagingRoute,
  getReportsMdrUsageReportsIdRoute,
  getReportsMdrUsageReportsRoute,
  getReportsMdrUsageReportsSyncRoute,
  postLegacyReportingUsageReportsMessaging2Route,
  postLegacyReportingUsageReportsMessagingRoute,
  postReportsMdrUsageReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mdrUsageReportsHandler = app
  .openapi(getLegacyReportingUsageReportsMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingUsageReportsMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingUsageReportsMessagingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingUsageReportsMessagingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingUsageReportsMessaging2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingUsageReportsMessaging2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingUsageReportsMessagingId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingUsageReportsMessagingId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMdrUsageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsMdrUsageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMdrUsageReportsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsMdrUsageReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMdrUsageReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
