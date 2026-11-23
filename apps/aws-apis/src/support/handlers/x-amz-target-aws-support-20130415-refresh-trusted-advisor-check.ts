import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSupport20130415RefreshTrustedAdvisorCheckHandler = app.openapi(
  postXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
