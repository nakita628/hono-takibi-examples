import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeStorageRoute, postActionDescribeStorageRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeStorageHandler = app
  .openapi(getActionDescribeStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
