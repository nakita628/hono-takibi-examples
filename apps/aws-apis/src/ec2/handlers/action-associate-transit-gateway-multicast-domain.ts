import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateTransitGatewayMulticastDomainRoute,
  postActionAssociateTransitGatewayMulticastDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssociateTransitGatewayMulticastDomainHandler = app
  .openapi(getActionAssociateTransitGatewayMulticastDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateTransitGatewayMulticastDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
