import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const describeDeviceHandler = app.openapi(postDescribeDeviceRoute, (c) => {
  throw new Error('Not implemented')
})
