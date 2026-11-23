import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const describeConnectorHandler = app.openapi(postDescribeConnectorRoute, (c) => {
  throw new Error('Not implemented')
})
