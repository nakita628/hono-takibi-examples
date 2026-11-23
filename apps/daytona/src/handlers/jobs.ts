import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getJobsJobIdRoute,
  getJobsPollRoute,
  getJobsRoute,
  postJobsJobIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsPollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
