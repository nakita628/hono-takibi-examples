import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportsIndexRoute,
  getReportsReportNumberIndexRoute,
  postReportsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getReportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsReportNumberIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
