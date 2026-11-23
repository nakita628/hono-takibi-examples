import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeStaleSecurityGroupsRoute,
  postActionDescribeStaleSecurityGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeStaleSecurityGroupsHandler = app
  .openapi(getActionDescribeStaleSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStaleSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
