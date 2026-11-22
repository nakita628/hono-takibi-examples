import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiKavitaPlusAuditEntriesSeriesSeriesIdRoute,
  getApiKavitaPlusAuditFailedScrobbleEventsRoute,
  getApiKavitaPlusAuditMyStatsRoute,
  getApiKavitaPlusAuditStatsRoute,
  postApiKavitaPlusAuditEntriesRoute,
  postApiKavitaPlusAuditMyActivityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kavitaPlusAuditHandler = app
  .openapi(postApiKavitaPlusAuditEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKavitaPlusAuditEntriesSeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKavitaPlusAuditStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKavitaPlusAuditMyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKavitaPlusAuditMyActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKavitaPlusAuditFailedScrobbleEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
