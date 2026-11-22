import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getJobsJobIdFilesFileIdRoute,
  getJobsJobIdFilesRoute,
  getJobsJobIdRoute,
  postJobsJobIdFilesOutputRoute,
  putJobsJobIdDatesRoute,
  putJobsJobIdInstructionsRoute,
  putJobsJobIdStatusRoute,
  putJobsJobIdVendorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsClassicHandler = app
  .openapi(getJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJobsJobIdDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsJobIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsJobIdFilesOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsJobIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJobsJobIdInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJobsJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJobsJobIdVendorRoute, (c) => {
    throw new Error('Not implemented')
  })
