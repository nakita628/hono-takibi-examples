import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsRoute, postJobsRoute, putJobsNameRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
