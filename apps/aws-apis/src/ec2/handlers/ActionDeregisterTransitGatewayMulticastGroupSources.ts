import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeregisterTransitGatewayMulticastGroupSourcesRoute,
  postActionDeregisterTransitGatewayMulticastGroupSourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeregisterTransitGatewayMulticastGroupSourcesHandler = app
  .openapi(getActionDeregisterTransitGatewayMulticastGroupSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeregisterTransitGatewayMulticastGroupSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
