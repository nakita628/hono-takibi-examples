import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsJobIdRoute, postJobsJobIdCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(postJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
