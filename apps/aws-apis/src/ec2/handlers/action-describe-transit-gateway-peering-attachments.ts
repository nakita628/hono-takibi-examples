import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewayPeeringAttachmentsRoute,
  postActionDescribeTransitGatewayPeeringAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTransitGatewayPeeringAttachmentsHandler = app
  .openapi(getActionDescribeTransitGatewayPeeringAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewayPeeringAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
