import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAcceptTransitGatewayPeeringAttachmentRoute,
  postActionAcceptTransitGatewayPeeringAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAcceptTransitGatewayPeeringAttachmentHandler = app
  .openapi(getActionAcceptTransitGatewayPeeringAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAcceptTransitGatewayPeeringAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
