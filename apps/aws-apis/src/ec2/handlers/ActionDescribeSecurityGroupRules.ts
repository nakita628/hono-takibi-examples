import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSecurityGroupRulesRoute,
  postActionDescribeSecurityGroupRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeSecurityGroupRulesHandler = app
  .openapi(getActionDescribeSecurityGroupRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSecurityGroupRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
