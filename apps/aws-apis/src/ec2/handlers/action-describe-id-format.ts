import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeIdFormatRoute, postActionDescribeIdFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeIdFormatHandler = app
  .openapi(getActionDescribeIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
