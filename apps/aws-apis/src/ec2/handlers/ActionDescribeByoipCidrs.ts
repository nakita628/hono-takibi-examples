import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeByoipCidrsRoute, postActionDescribeByoipCidrsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeByoipCidrsHandler = app
  .openapi(getActionDescribeByoipCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeByoipCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
