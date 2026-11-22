import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101DescribeServersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101DescribeServersHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101DescribeServersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
