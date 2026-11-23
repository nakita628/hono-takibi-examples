import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsReportIdFilesFileIdRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app.openapi(getReportsReportIdFilesFileIdRoute, (c) => {
  throw new Error('Not implemented')
})
