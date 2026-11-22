import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getJobsJobIdRoute,
  postJobsJobIdCancelRoute,
  postProjectProjectSlugJobJobNumberCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobHandler = app
  .openapi(postJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSlugJobJobNumberCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
