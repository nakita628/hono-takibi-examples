import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeSSLPoliciesRoute, postActionDescribeSSLPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSslPoliciesHandler = app
  .openapi(getActionDescribeSSLPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSSLPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
