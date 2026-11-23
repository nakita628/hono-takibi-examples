import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeConnectorEntityRoute } from '../routes'

const app = new OpenAPIHono()

export const describeConnectorEntityHandler = app.openapi(postDescribeConnectorEntityRoute, (c) => {
  throw new Error('Not implemented')
})
