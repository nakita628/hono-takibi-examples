import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeWorldTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const describeWorldTemplateHandler = app.openapi(postDescribeWorldTemplateRoute, (c) => {
  throw new Error('Not implemented')
})
