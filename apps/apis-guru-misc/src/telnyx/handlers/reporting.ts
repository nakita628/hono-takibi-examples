import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWirelessDetailRecordsReportsIdRoute,
  getWirelessDetailRecordsReportsIdRoute,
  getWirelessDetailRecordsReportsRoute,
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
