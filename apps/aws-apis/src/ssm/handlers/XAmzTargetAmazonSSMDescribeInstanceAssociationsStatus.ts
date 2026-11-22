import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeInstanceAssociationsStatusHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
