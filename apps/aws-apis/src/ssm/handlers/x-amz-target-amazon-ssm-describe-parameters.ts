import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeParametersHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeParametersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
