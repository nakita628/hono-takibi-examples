import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsRoute, postJobsParseRoute, postJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsParseRoute, (c) => {
    throw new Error('Not implemented')
  })
