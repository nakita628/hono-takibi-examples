import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeConnectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const describeConnectorsHandler = app.openapi(postDescribeConnectorsRoute, (c) => {
  throw new Error('Not implemented')
})
