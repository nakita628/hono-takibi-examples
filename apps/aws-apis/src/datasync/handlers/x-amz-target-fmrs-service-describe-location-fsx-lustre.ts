import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationFsxLustreRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceDescribeLocationFsxLustreHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationFsxLustreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
