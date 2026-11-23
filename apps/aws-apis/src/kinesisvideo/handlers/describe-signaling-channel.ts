import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSignalingChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const describeSignalingChannelHandler = app.openapi(
  postDescribeSignalingChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
