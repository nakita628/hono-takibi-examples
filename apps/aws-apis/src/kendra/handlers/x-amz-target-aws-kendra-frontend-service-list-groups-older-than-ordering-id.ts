import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceListGroupsOlderThanOrderingIdHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
