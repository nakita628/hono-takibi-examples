import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeWorldRoute } from '../routes'

const app = new OpenAPIHono()

export const describeWorldHandler = app.openapi(postDescribeWorldRoute, (c) => {
  throw new Error('Not implemented')
})
