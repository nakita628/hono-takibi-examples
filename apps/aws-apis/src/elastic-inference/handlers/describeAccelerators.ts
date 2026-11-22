import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeAcceleratorsRoute } from '../routes'

const app = new OpenAPIHono()

export const describeAcceleratorsHandler = app.openapi(postDescribeAcceleratorsRoute, (c) => {
  throw new Error('Not implemented')
})
