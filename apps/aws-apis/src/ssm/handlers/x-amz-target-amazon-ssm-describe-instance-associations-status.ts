import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeInstanceAssociationsStatusHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
