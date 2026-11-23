import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeCustomerGatewaysRoute,
  postActionDescribeCustomerGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeCustomerGatewaysHandler = app
  .openapi(getActionDescribeCustomerGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCustomerGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
