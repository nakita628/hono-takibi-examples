import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeServiceAccessPoliciesRoute,
  postActionDescribeServiceAccessPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeServiceAccessPoliciesHandler = app
  .openapi(getActionDescribeServiceAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeServiceAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
