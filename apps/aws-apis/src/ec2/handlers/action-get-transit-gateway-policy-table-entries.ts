import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetTransitGatewayPolicyTableEntriesRoute,
  postActionGetTransitGatewayPolicyTableEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetTransitGatewayPolicyTableEntriesHandler = app
  .openapi(getActionGetTransitGatewayPolicyTableEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTransitGatewayPolicyTableEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
