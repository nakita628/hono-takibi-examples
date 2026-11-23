import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsStatusJobIdRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app.openapi(getJobsStatusJobIdRoute, (c) => {
  throw new Error('Not implemented')
})
