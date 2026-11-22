import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1JobsStateRoute,
  postApiV1JobsJobTypeJobIdCancelRoute,
  postApiV1JobsPauseRoute,
  postApiV1JobsResumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobHandler = app
  .openapi(postApiV1JobsPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1JobsResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1JobsStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1JobsJobTypeJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
