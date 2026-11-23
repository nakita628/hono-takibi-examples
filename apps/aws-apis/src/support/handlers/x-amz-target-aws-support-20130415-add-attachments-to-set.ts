import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415AddAttachmentsToSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSupport20130415AddAttachmentsToSetHandler = app.openapi(
  postXAmzTargetAWSSupport20130415AddAttachmentsToSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
