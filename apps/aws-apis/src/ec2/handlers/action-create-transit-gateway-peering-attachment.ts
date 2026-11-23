import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTransitGatewayPeeringAttachmentRoute,
  postActionCreateTransitGatewayPeeringAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateTransitGatewayPeeringAttachmentHandler = app
  .openapi(getActionCreateTransitGatewayPeeringAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayPeeringAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
