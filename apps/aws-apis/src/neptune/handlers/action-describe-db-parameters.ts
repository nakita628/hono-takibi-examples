import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeDBParametersRoute, postActionDescribeDBParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbParametersHandler = app
  .openapi(getActionDescribeDBParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
