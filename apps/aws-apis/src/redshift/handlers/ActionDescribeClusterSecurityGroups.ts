import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClusterSecurityGroupsRoute,
  postActionDescribeClusterSecurityGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeClusterSecurityGroupsHandler = app
  .openapi(getActionDescribeClusterSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClusterSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
