import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRejectTransitGatewayPeeringAttachmentRoute,
  postActionRejectTransitGatewayPeeringAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRejectTransitGatewayPeeringAttachmentHandler = app
  .openapi(getActionRejectTransitGatewayPeeringAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRejectTransitGatewayPeeringAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
