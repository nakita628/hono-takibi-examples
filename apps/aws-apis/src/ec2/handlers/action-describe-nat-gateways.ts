import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeNatGatewaysRoute, postActionDescribeNatGatewaysRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeNatGatewaysHandler = app
  .openapi(getActionDescribeNatGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNatGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
