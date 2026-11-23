import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataDescribeTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRedshiftDataDescribeTableHandler = app.openapi(
  postXAmzTargetRedshiftDataDescribeTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
