import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewayAttachmentsRoute,
  postActionDescribeTransitGatewayAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTransitGatewayAttachmentsHandler = app
  .openapi(getActionDescribeTransitGatewayAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewayAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
