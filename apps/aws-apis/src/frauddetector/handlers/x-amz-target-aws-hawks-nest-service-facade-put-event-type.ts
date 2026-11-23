import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadePutEventTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadePutEventTypeHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadePutEventTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
