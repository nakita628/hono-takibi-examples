import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAcceptTransitGatewayMulticastDomainAssociationsRoute,
  postActionAcceptTransitGatewayMulticastDomainAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAcceptTransitGatewayMulticastDomainAssociationsHandler = app
  .openapi(getActionAcceptTransitGatewayMulticastDomainAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAcceptTransitGatewayMulticastDomainAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
