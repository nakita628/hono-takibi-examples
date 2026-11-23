import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeOptionGroupsRoute, postActionDescribeOptionGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeOptionGroupsHandler = app
  .openapi(getActionDescribeOptionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeOptionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
