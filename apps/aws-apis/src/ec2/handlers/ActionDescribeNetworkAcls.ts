import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeNetworkAclsRoute, postActionDescribeNetworkAclsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeNetworkAclsHandler = app
  .openapi(getActionDescribeNetworkAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNetworkAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
