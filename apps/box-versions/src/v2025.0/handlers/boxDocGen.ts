import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDocgenBatchJobsBatchIdRoute,
  getDocgenJobsJobIdRoute,
  getDocgenJobsRoute,
  postDocgenBatchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boxDocGenHandler = app
  .openapi(getDocgenJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocgenJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocgenBatchJobsBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocgenBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
