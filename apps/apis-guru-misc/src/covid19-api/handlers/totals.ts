import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportTotalsRoute, getTotalsRoute } from '../routes'

const app = new OpenAPIHono()

export const totalsHandler = app
  .openapi(getReportTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
