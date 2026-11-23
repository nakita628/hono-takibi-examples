import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getJobsIdKeyRoute,
  getJobsIdRoute,
  getJobsRoute,
  postJobsIdCancelRoute,
  postJobsIdPauseRoute,
  postJobsIdResubmitRoute,
  postJobsIdResumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsIdResubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsIdKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
