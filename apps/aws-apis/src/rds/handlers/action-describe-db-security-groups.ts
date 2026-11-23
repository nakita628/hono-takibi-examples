import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBSecurityGroupsRoute,
  postActionDescribeDBSecurityGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbSecurityGroupsHandler = app
  .openapi(getActionDescribeDBSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
