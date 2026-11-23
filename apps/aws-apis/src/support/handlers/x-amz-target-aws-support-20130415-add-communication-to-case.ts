import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415AddCommunicationToCaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSupport20130415AddCommunicationToCaseHandler = app.openapi(
  postXAmzTargetAWSSupport20130415AddCommunicationToCaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
