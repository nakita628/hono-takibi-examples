import { OpenAPIHono } from '@hono/zod-openapi'
import { postProfileJobsRoute, putProfileJobsNameRoute } from '../routes'

const app = new OpenAPIHono()

export const profileJobsHandler = app
  .openapi(postProfileJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProfileJobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
