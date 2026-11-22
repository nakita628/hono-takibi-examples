import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4JobRoute,
  getApiV4ProjectsIdJobsJobIdRoute,
  getApiV4ProjectsIdJobsJobIdTraceRoute,
  getApiV4ProjectsIdJobsRoute,
  postApiV4ProjectsIdJobsJobIdCancelRoute,
  postApiV4ProjectsIdJobsJobIdEraseRoute,
  postApiV4ProjectsIdJobsJobIdPlayRoute,
  postApiV4ProjectsIdJobsJobIdRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ciJobsHandler = app
  .openapi(getApiV4ProjectsIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdJobsJobIdTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdJobsJobIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdJobsJobIdEraseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdJobsJobIdPlayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4JobRoute, (c) => {
    throw new Error('Not implemented')
  })
