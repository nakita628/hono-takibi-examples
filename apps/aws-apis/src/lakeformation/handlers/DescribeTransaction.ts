import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const DescribeTransactionHandler = app.openapi(postDescribeTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
