import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWirelessDetailRecordsReportsId2Route,
  deleteWirelessDetailRecordsReportsIdRoute,
  getWirelessDetailRecordsReports2Route,
  getWirelessDetailRecordsReportsId2Route,
  getWirelessDetailRecordsReportsIdRoute,
  getWirelessDetailRecordsReportsRoute,
  postWirelessDetailRecordsReports2Route,
  postWirelessDetailRecordsReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportingHandler = app
  .openapi(getWirelessDetailRecordsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWirelessDetailRecordsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessDetailRecordsReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessDetailRecordsReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessDetailRecordsReports2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWirelessDetailRecordsReports2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessDetailRecordsReportsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessDetailRecordsReportsId2Route, (c) => {
    throw new Error('Not implemented')
  })
