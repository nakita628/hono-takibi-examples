import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSearchTransitGatewayMulticastGroupsRoute,
  postActionSearchTransitGatewayMulticastGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSearchTransitGatewayMulticastGroupsHandler = app
  .openapi(getActionSearchTransitGatewayMulticastGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSearchTransitGatewayMulticastGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
