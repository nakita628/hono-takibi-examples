import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeTargetHealthRoute, postActionDescribeTargetHealthRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTargetHealthHandler = app
  .openapi(getActionDescribeTargetHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTargetHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
