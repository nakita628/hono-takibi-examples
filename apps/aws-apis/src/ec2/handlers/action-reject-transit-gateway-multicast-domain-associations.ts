import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRejectTransitGatewayMulticastDomainAssociationsRoute,
  postActionRejectTransitGatewayMulticastDomainAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRejectTransitGatewayMulticastDomainAssociationsHandler = app
  .openapi(getActionRejectTransitGatewayMulticastDomainAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRejectTransitGatewayMulticastDomainAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
