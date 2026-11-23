import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationFsxWindowsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceDescribeLocationFsxWindowsHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationFsxWindowsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
