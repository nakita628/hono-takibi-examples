import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVpcEndpointConnectionNotificationRoute,
  postActionModifyVpcEndpointConnectionNotificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyVpcEndpointConnectionNotificationHandler = app
  .openapi(getActionModifyVpcEndpointConnectionNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpcEndpointConnectionNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
