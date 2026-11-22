import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultHandler = app.openapi(
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
