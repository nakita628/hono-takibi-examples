import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteJobsIdRoute, getJobsIdRoute, getJobsRoute, postJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
