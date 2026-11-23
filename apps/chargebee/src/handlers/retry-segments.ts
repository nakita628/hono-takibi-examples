import { OpenAPIHono } from '@hono/zod-openapi'
import { getRetrySegmentsRetrySegmentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const retrySegmentsHandler = app.openapi(getRetrySegmentsRetrySegmentIdRoute, (c) => {
  throw new Error('Not implemented')
})
