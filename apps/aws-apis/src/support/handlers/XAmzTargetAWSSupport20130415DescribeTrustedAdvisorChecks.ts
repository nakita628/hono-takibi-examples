import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksHandler = app.openapi(
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
