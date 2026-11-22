import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsRoute, patchReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsReportRootHandler = app
  .openapi(getReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
