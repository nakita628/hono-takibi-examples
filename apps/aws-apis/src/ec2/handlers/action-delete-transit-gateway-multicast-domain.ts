import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayMulticastDomainRoute,
  postActionDeleteTransitGatewayMulticastDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteTransitGatewayMulticastDomainHandler = app
  .openapi(getActionDeleteTransitGatewayMulticastDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayMulticastDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
