import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVpcEndpointConnectionNotificationsRoute,
  postActionDeleteVpcEndpointConnectionNotificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVpcEndpointConnectionNotificationsHandler = app
  .openapi(getActionDeleteVpcEndpointConnectionNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVpcEndpointConnectionNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
