import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2JobsJobIDRoute,
  getApiV2JobsJobIDRoute,
  getApiV2JobsRoute,
  postApiV2JobsRoute,
  putApiV2JobsJobIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getApiV2JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2JobsJobIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobsJobIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2JobsJobIDRoute, (c) => {
    throw new Error('Not implemented')
  })
