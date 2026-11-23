import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeAlertRoute } from '../routes'

const app = new OpenAPIHono()

export const describeAlertHandler = app.openapi(postDescribeAlertRoute, (c) => {
  throw new Error('Not implemented')
})
