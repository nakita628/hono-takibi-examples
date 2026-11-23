import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNetworkInterfaceAttributeRoute,
  postActionDescribeNetworkInterfaceAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeNetworkInterfaceAttributeHandler = app
  .openapi(getActionDescribeNetworkInterfaceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNetworkInterfaceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
