import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestoreJobsJobIdRoute, getRestoreJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const restoreJobsHandler = app
  .openapi(getRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestoreJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
