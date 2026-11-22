import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1DescribeObjectRoute } from '../routes'

const app = new OpenAPIHono()

export const describeHandler = app.openapi(getV1DescribeObjectRoute, (c) => {
  throw new Error('Not implemented')
})
