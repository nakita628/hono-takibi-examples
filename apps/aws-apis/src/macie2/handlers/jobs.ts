import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsJobIdRoute, patchJobsJobIdRoute, postJobsListRoute, postJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(postJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsListRoute, (c) => {
    throw new Error('Not implemented')
  })
