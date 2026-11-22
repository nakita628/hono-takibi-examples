import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationSmbRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceDescribeLocationSmbHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationSmbRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
