import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeInstanceInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeInstanceInformationHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeInstanceInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
