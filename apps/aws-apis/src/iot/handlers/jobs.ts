import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJobsJobIdRoute,
  getJobsJobIdJobDocumentRoute,
  getJobsJobIdRoute,
  getJobsJobIdThingsRoute,
  getJobsRoute,
  patchJobsJobIdRoute,
  postJobsJobIdTargetsRoute,
  putJobsJobIdCancelRoute,
  putJobsJobIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(postJobsJobIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsJobIdJobDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsJobIdThingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
