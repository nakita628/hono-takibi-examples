import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const DescribeResourceHandler = app.openapi(postDescribeResourceRoute, (c) => {
  throw new Error('Not implemented')
})
