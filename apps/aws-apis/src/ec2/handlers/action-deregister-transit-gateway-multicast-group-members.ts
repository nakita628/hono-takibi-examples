import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeregisterTransitGatewayMulticastGroupMembersRoute,
  postActionDeregisterTransitGatewayMulticastGroupMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeregisterTransitGatewayMulticastGroupMembersHandler = app
  .openapi(getActionDeregisterTransitGatewayMulticastGroupMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeregisterTransitGatewayMulticastGroupMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
