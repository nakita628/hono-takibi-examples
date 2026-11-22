import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRegisterTransitGatewayMulticastGroupMembersRoute,
  postActionRegisterTransitGatewayMulticastGroupMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRegisterTransitGatewayMulticastGroupMembersHandler = app
  .openapi(getActionRegisterTransitGatewayMulticastGroupMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRegisterTransitGatewayMulticastGroupMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
