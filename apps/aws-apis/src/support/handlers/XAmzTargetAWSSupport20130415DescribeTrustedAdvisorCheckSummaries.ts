import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesHandler = app.openapi(
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
