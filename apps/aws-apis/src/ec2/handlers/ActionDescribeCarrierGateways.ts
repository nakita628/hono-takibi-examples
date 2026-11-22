import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeCarrierGatewaysRoute,
  postActionDescribeCarrierGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeCarrierGatewaysHandler = app
  .openapi(getActionDescribeCarrierGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCarrierGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
