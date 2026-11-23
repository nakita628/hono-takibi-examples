import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayPeeringAttachmentRoute,
  postActionDeleteTransitGatewayPeeringAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteTransitGatewayPeeringAttachmentHandler = app
  .openapi(getActionDeleteTransitGatewayPeeringAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayPeeringAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
