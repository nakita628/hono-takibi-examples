import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeTagsRoute, postActionDescribeTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTagsHandler = app
  .openapi(getActionDescribeTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
