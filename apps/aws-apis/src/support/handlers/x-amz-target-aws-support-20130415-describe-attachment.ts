import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415DescribeAttachmentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSupport20130415DescribeAttachmentHandler = app.openapi(
  postXAmzTargetAWSSupport20130415DescribeAttachmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
