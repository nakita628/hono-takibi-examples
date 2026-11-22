import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNetworkInterfacePermissionsRoute,
  postActionDescribeNetworkInterfacePermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeNetworkInterfacePermissionsHandler = app
  .openapi(getActionDescribeNetworkInterfacePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNetworkInterfacePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
