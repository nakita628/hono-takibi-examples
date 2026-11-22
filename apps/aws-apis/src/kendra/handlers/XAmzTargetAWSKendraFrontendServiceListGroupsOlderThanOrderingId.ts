import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
