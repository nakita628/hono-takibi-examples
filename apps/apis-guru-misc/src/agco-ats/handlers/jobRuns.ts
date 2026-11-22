import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2JobRunsJobRunIDRoute,
  getApiV2JobRunsJobRunIDRoute,
  getApiV2JobRunsRoute,
  postApiV2JobRunsRoute,
  putApiV2JobRunsJobRunIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobRunsHandler = app
  .openapi(getApiV2JobRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2JobRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2JobRunsJobRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobRunsJobRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2JobRunsJobRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
