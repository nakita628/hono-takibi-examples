import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSourceServersRoute } from '../routes'

const app = new OpenAPIHono()

export const describeSourceServersHandler = app.openapi(postDescribeSourceServersRoute, (c) => {
  throw new Error('Not implemented')
})
