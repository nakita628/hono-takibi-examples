import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsCompletedCountByTagRoute, getJobsDbClockRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getJobsDbClockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsCompletedCountByTagRoute, (c) => {
    throw new Error('Not implemented')
  })
