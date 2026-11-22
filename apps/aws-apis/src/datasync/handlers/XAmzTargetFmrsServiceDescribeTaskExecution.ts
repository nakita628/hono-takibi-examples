import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeTaskExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceDescribeTaskExecutionHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeTaskExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
