import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVpcEndpointServicePermissionsRoute,
  postActionDescribeVpcEndpointServicePermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVpcEndpointServicePermissionsHandler = app
  .openapi(getActionDescribeVpcEndpointServicePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcEndpointServicePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
