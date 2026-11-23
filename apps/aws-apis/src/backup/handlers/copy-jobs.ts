import { OpenAPIHono } from '@hono/zod-openapi'
import { getCopyJobsCopyJobIdRoute, getCopyJobsIndexRoute, putCopyJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const copyJobsHandler = app
  .openapi(getCopyJobsCopyJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopyJobsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCopyJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
