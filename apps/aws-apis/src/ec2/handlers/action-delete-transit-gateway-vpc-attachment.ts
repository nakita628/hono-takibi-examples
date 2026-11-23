import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayVpcAttachmentRoute,
  postActionDeleteTransitGatewayVpcAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteTransitGatewayVpcAttachmentHandler = app
  .openapi(getActionDeleteTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
