import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationEfsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceDescribeLocationEfsHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationEfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
