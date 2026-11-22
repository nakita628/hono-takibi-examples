import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationS3Route } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceDescribeLocationS3Handler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationS3Route,
  (c) => {
    throw new Error('Not implemented')
  },
)
