import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewayPeeringAttachmentsRoute,
  postActionDescribeTransitGatewayPeeringAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeTransitGatewayPeeringAttachmentsHandler = app
  .openapi(getActionDescribeTransitGatewayPeeringAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewayPeeringAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
