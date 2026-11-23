import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeWorldExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const describeWorldExportJobHandler = app.openapi(postDescribeWorldExportJobRoute, (c) => {
  throw new Error('Not implemented')
})
