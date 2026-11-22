import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationNfsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceDescribeLocationNfsHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationNfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
