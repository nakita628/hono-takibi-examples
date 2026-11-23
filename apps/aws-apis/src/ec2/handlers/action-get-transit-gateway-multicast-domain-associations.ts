import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetTransitGatewayMulticastDomainAssociationsRoute,
  postActionGetTransitGatewayMulticastDomainAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetTransitGatewayMulticastDomainAssociationsHandler = app
  .openapi(getActionGetTransitGatewayMulticastDomainAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTransitGatewayMulticastDomainAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
