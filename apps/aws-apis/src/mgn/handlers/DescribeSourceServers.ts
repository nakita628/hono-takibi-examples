import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSourceServersRoute } from '../routes'

const app = new OpenAPIHono()

export const DescribeSourceServersHandler = app.openapi(postDescribeSourceServersRoute, (c) => {
  throw new Error('Not implemented')
})
