import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeParametersHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeParametersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
