import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app.openapi(getJobsIdRoute, (c) => {
  throw new Error('Not implemented')
})
