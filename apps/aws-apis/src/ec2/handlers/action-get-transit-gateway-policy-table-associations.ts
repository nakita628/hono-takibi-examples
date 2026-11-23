import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetTransitGatewayPolicyTableAssociationsRoute,
  postActionGetTransitGatewayPolicyTableAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetTransitGatewayPolicyTableAssociationsHandler = app
  .openapi(getActionGetTransitGatewayPolicyTableAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTransitGatewayPolicyTableAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
