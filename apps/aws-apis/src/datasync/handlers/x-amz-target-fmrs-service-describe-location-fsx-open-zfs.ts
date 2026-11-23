import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationFsxOpenZfsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceDescribeLocationFsxOpenZfsHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationFsxOpenZfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
