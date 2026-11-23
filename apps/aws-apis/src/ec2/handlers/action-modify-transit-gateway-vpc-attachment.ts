import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyTransitGatewayVpcAttachmentRoute,
  postActionModifyTransitGatewayVpcAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyTransitGatewayVpcAttachmentHandler = app
  .openapi(getActionModifyTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
