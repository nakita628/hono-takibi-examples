import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsJobGidRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app.openapi(getJobsJobGidRoute, (c) => {
  throw new Error('Not implemented')
})
