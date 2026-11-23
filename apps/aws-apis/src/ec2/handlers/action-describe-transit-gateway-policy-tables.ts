import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewayPolicyTablesRoute,
  postActionDescribeTransitGatewayPolicyTablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTransitGatewayPolicyTablesHandler = app
  .openapi(getActionDescribeTransitGatewayPolicyTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewayPolicyTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
