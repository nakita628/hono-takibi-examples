import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationHdfsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceDescribeLocationHdfsHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationHdfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
