import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestoreJobsIndexRoute,
  getRestoreJobsRestoreJobIdRoute,
  putRestoreJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restoreJobsHandler = app
  .openapi(getRestoreJobsRestoreJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestoreJobsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
