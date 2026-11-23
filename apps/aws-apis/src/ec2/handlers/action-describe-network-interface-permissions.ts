import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNetworkInterfacePermissionsRoute,
  postActionDescribeNetworkInterfacePermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeNetworkInterfacePermissionsHandler = app
  .openapi(getActionDescribeNetworkInterfacePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNetworkInterfacePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
