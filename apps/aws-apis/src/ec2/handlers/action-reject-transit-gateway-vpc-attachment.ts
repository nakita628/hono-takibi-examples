import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRejectTransitGatewayVpcAttachmentRoute,
  postActionRejectTransitGatewayVpcAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRejectTransitGatewayVpcAttachmentHandler = app
  .openapi(getActionRejectTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRejectTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
