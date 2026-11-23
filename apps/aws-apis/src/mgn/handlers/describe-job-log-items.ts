import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeJobLogItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const describeJobLogItemsHandler = app.openapi(postDescribeJobLogItemsRoute, (c) => {
  throw new Error('Not implemented')
})
