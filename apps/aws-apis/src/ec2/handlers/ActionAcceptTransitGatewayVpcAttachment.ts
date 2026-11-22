import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAcceptTransitGatewayVpcAttachmentRoute,
  postActionAcceptTransitGatewayVpcAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAcceptTransitGatewayVpcAttachmentHandler = app
  .openapi(getActionAcceptTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAcceptTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
