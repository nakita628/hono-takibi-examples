import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeUsersRoute, postActionDescribeUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeUsersHandler = app
  .openapi(getActionDescribeUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
