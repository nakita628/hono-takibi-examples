import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101DescribeAccountAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101DescribeAccountAttributesHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101DescribeAccountAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
