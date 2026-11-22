import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNetworkInterfacesRoute,
  postActionDescribeNetworkInterfacesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeNetworkInterfacesHandler = app
  .openapi(getActionDescribeNetworkInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNetworkInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
