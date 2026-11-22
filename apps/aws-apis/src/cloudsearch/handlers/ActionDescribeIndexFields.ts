import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeIndexFieldsRoute, postActionDescribeIndexFieldsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeIndexFieldsHandler = app
  .openapi(getActionDescribeIndexFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIndexFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
