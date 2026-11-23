import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDeleteEventTypeHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
