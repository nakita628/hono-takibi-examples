import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyTransitGatewayVpcAttachmentRoute,
  postActionModifyTransitGatewayVpcAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyTransitGatewayVpcAttachmentHandler = app
  .openapi(getActionModifyTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
