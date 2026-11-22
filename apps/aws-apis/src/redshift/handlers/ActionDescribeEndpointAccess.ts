import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEndpointAccessRoute,
  postActionDescribeEndpointAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeEndpointAccessHandler = app
  .openapi(getActionDescribeEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
