import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEndpointAccessRoute,
  postActionDescribeEndpointAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeEndpointAccessHandler = app
  .openapi(getActionDescribeEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
