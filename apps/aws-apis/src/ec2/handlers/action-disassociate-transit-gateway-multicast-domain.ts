import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateTransitGatewayMulticastDomainRoute,
  postActionDisassociateTransitGatewayMulticastDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisassociateTransitGatewayMulticastDomainHandler = app
  .openapi(getActionDisassociateTransitGatewayMulticastDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateTransitGatewayMulticastDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
