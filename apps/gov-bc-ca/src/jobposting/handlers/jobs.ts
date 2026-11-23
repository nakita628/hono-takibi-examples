import { OpenAPIHono } from '@hono/zod-openapi'
import { postJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app.openapi(postJobsRoute, (c) => {
  throw new Error('Not implemented')
})
