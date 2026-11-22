import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSigningJobsJobIdRoute,
  getSigningJobsRoute,
  postSigningJobsRoute,
  putSigningJobsJobIdRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const signingJobsHandler = app
  .openapi(getSigningJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigningJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSigningJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSigningJobsJobIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
