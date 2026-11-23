import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateVpcEndpointConnectionNotificationRoute,
  postActionCreateVpcEndpointConnectionNotificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateVpcEndpointConnectionNotificationHandler = app
  .openapi(getActionCreateVpcEndpointConnectionNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVpcEndpointConnectionNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
