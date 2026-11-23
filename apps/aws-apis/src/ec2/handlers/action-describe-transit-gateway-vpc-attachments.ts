import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewayVpcAttachmentsRoute,
  postActionDescribeTransitGatewayVpcAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTransitGatewayVpcAttachmentsHandler = app
  .openapi(getActionDescribeTransitGatewayVpcAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewayVpcAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
