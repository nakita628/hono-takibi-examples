import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetTransitGatewayAttachmentPropagationsRoute,
  postActionGetTransitGatewayAttachmentPropagationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetTransitGatewayAttachmentPropagationsHandler = app
  .openapi(getActionGetTransitGatewayAttachmentPropagationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTransitGatewayAttachmentPropagationsRoute, (c) => {
    throw new Error('Not implemented')
  })
