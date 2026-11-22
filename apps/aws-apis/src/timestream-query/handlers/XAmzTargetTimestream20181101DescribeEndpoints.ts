import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101DescribeEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101DescribeEndpointsHandler = app.openapi(
  postXAmzTargetTimestream20181101DescribeEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
