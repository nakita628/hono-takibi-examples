import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransitGatewayRouteTableAttachmentsAttachmentIdRoute,
  postTransitGatewayRouteTableAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transitGatewayRouteTableAttachmentsHandler = app
  .openapi(postTransitGatewayRouteTableAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitGatewayRouteTableAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
