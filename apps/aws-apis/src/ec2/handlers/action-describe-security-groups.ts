import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSecurityGroupsRoute,
  postActionDescribeSecurityGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSecurityGroupsHandler = app
  .openapi(getActionDescribeSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
