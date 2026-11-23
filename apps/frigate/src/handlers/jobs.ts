import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsExportExportIdRoute, getJobsExportRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getJobsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsExportExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
