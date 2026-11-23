import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLocalGatewaysRoute,
  postActionDescribeLocalGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeLocalGatewaysHandler = app
  .openapi(getActionDescribeLocalGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLocalGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
