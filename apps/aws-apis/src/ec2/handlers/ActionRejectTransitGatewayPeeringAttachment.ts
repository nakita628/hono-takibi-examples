import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRejectTransitGatewayPeeringAttachmentRoute,
  postActionRejectTransitGatewayPeeringAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRejectTransitGatewayPeeringAttachmentHandler = app
  .openapi(getActionRejectTransitGatewayPeeringAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRejectTransitGatewayPeeringAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
