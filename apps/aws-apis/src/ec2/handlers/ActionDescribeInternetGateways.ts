import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInternetGatewaysRoute,
  postActionDescribeInternetGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeInternetGatewaysHandler = app
  .openapi(getActionDescribeInternetGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInternetGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
