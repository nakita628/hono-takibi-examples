import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEgressOnlyInternetGatewaysRoute,
  postActionDescribeEgressOnlyInternetGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeEgressOnlyInternetGatewaysHandler = app
  .openapi(getActionDescribeEgressOnlyInternetGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEgressOnlyInternetGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
