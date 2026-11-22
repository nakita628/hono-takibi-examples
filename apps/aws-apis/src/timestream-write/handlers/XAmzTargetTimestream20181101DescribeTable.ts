import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101DescribeTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101DescribeTableHandler = app.openapi(
  postXAmzTargetTimestream20181101DescribeTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
