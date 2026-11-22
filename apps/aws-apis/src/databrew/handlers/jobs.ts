import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJobsNameRoute,
  getJobsNameJobRunRunIdRoute,
  getJobsNameJobRunsRoute,
  getJobsNameRoute,
  getJobsRoute,
  postJobsNameJobRunRunIdStopJobRunRoute,
  postJobsNameStartJobRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(deleteJobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsNameJobRunRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsNameJobRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsNameStartJobRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsNameJobRunRunIdStopJobRunRoute, (c) => {
    throw new Error('Not implemented')
  })
