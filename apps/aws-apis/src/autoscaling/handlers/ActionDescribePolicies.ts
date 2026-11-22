import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribePoliciesRoute, postActionDescribePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribePoliciesHandler = app
  .openapi(getActionDescribePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
