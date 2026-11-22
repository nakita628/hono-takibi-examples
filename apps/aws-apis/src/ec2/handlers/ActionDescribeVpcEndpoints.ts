import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeVpcEndpointsRoute, postActionDescribeVpcEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVpcEndpointsHandler = app
  .openapi(getActionDescribeVpcEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
