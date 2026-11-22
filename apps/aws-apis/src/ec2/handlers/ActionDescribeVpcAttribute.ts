import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeVpcAttributeRoute, postActionDescribeVpcAttributeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVpcAttributeHandler = app
  .openapi(getActionDescribeVpcAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
