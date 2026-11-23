import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEndpointAuthorizationRoute,
  postActionDescribeEndpointAuthorizationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeEndpointAuthorizationHandler = app
  .openapi(getActionDescribeEndpointAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEndpointAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
