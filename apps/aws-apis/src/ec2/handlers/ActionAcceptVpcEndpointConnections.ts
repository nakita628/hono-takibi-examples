import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAcceptVpcEndpointConnectionsRoute,
  postActionAcceptVpcEndpointConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAcceptVpcEndpointConnectionsHandler = app
  .openapi(getActionAcceptVpcEndpointConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAcceptVpcEndpointConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
