import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3DescribeParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDAXV3DescribeParametersHandler = app.openapi(
  postXAmzTargetAmazonDAXV3DescribeParametersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
