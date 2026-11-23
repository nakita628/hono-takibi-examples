import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const describeJobsHandler = app.openapi(postDescribeJobsRoute, (c) => {
  throw new Error('Not implemented')
})
