import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTransitGatewayMulticastDomainRoute,
  postActionCreateTransitGatewayMulticastDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateTransitGatewayMulticastDomainHandler = app
  .openapi(getActionCreateTransitGatewayMulticastDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayMulticastDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
