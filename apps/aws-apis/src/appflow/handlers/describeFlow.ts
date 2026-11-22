import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeFlowRoute } from '../routes'

const app = new OpenAPIHono()

export const describeFlowHandler = app.openapi(postDescribeFlowRoute, (c) => {
  throw new Error('Not implemented')
})
