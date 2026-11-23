import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeDomainsRoute, postActionDescribeDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDomainsHandler = app
  .openapi(getActionDescribeDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
