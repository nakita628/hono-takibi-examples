import { OpenAPIHono } from '@hono/zod-openapi'
import { getCrsreportReportNumberRoute, getCrsreportRoute } from '../routes'

const app = new OpenAPIHono()

export const crsreportHandler = app
  .openapi(getCrsreportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrsreportReportNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
