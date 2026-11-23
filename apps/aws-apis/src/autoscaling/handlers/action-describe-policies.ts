import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribePoliciesRoute, postActionDescribePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribePoliciesHandler = app
  .openapi(getActionDescribePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
