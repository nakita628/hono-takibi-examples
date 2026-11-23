import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415DescribeCommunicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSupport20130415DescribeCommunicationsHandler = app.openapi(
  postXAmzTargetAWSSupport20130415DescribeCommunicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
