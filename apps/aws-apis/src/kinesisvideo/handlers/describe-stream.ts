import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const describeStreamHandler = app.openapi(postDescribeStreamRoute, (c) => {
  throw new Error('Not implemented')
})
