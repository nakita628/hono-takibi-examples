import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewaysRoute,
  postActionDescribeTransitGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTransitGatewaysHandler = app
  .openapi(getActionDescribeTransitGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
