import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTransitGatewayVpcAttachmentRoute,
  postActionCreateTransitGatewayVpcAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateTransitGatewayVpcAttachmentHandler = app
  .openapi(getActionCreateTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayVpcAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
