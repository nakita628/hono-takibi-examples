import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShuttleReportsRoute,
  getShuttleReportsShuttleReportIdRoute,
  postShuttleReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shuttleReportsHandler = app
  .openapi(getShuttleReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleReportsShuttleReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
