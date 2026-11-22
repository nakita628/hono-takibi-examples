import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRejectVpcEndpointConnectionsRoute,
  postActionRejectVpcEndpointConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRejectVpcEndpointConnectionsHandler = app
  .openapi(getActionRejectVpcEndpointConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRejectVpcEndpointConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
