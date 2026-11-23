import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeRoute } from '../routes'

const app = new OpenAPIHono()

export const describeHandler = app.openapi(postDescribeRoute, (c) => {
  throw new Error('Not implemented')
})
