import { OpenAPIHono } from '@hono/zod-openapi'
import { getDocgenJobsJobIdRoute, getDocgenJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const docgenJobsHandler = app
  .openapi(getDocgenJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocgenJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
