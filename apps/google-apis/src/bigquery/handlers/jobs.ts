import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdJobsJobIdDeleteRoute,
  getProjectsProjectIdJobsJobIdRoute,
  getProjectsProjectIdJobsRoute,
  getProjectsProjectIdQueriesJobIdRoute,
  postProjectsProjectIdJobsJobIdCancelRoute,
  postProjectsProjectIdJobsRoute,
  postProjectsProjectIdQueriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getProjectsProjectIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdJobsJobIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdQueriesJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
