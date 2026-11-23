import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeKeyPairsRoute, postActionDescribeKeyPairsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeKeyPairsHandler = app
  .openapi(getActionDescribeKeyPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeKeyPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
