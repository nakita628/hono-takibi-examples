import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101DescribeEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101DescribeEventsHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101DescribeEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
