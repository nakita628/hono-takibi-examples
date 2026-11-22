import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataDescribeTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRedshiftDataDescribeTableHandler = app.openapi(
  postXAmzTargetRedshiftDataDescribeTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
