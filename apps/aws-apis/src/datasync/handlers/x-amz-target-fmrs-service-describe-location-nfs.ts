import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationNfsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceDescribeLocationNfsHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationNfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
