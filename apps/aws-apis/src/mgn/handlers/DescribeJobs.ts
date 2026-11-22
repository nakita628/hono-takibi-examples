import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const DescribeJobsHandler = app.openapi(postDescribeJobsRoute, (c) => {
  throw new Error('Not implemented')
})
