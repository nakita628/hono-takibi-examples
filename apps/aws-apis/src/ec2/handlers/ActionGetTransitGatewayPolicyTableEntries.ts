import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetTransitGatewayPolicyTableEntriesRoute,
  postActionGetTransitGatewayPolicyTableEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetTransitGatewayPolicyTableEntriesHandler = app
  .openapi(getActionGetTransitGatewayPolicyTableEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTransitGatewayPolicyTableEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
