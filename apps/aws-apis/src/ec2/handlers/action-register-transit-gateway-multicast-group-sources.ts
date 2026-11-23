import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRegisterTransitGatewayMulticastGroupSourcesRoute,
  postActionRegisterTransitGatewayMulticastGroupSourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRegisterTransitGatewayMulticastGroupSourcesHandler = app
  .openapi(getActionRegisterTransitGatewayMulticastGroupSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRegisterTransitGatewayMulticastGroupSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
