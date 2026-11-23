import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeIndexStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const describeIndexStatsHandler = app.openapi(postDescribeIndexStatsRoute, (c) => {
  throw new Error('Not implemented')
})
